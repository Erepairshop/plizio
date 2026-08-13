#!/usr/bin/env node

const args = Object.fromEntries(
  process.argv.slice(2).map((part) => {
    const index = part.indexOf('=');
    return index === -1
      ? [part.replace(/^--/, ''), true]
      : [part.slice(0, index).replace(/^--/, ''), part.slice(index + 1)];
  }),
);

const mode = String(args.mode || 'verify');
const token = process.env.META_ACCESS_TOKEN;
const pageId = process.env.META_PAGE_ID;
const instagramId = process.env.META_INSTAGRAM_ACCOUNT_ID;
const graphVersion = process.env.META_GRAPH_VERSION;

function required(value, name) {
  if (!value) throw new Error(`Missing required configuration: ${name}`);
  return value;
}

function safeError(body) {
  const text = typeof body === 'string' ? body : JSON.stringify(body);
  return token ? text.replaceAll(token, '[REDACTED]') : text;
}

async function graph(path, { method = 'GET', body } = {}) {
  const version = required(graphVersion, 'META_GRAPH_VERSION');
  const accessToken = required(token, 'META_ACCESS_TOKEN');
  const url = new URL(`https://graph.facebook.com/${version}/${path}`);
  const options = { method, headers: { Authorization: `Bearer ${accessToken}` } };

  if (body) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);
  const raw = await response.text();
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    data = raw;
  }

  if (!response.ok || data?.error) {
    throw new Error(`Meta API ${response.status}: ${safeError(data)}`);
  }
  return data;
}

async function verify() {
  const page = await graph(`${required(pageId, 'META_PAGE_ID')}?fields=id,name`);
  const result = { facebookPage: page };
  if (instagramId) {
    result.instagramAccount = await graph(`${instagramId}?fields=id,username,name`);
  }
  console.log(JSON.stringify(result, null, 2));
}

function requirePublishConfirmation() {
  if (args.confirm !== 'PUBLISH') {
    throw new Error('Publishing blocked: pass --confirm=PUBLISH');
  }
}

async function publishFacebook() {
  requirePublishConfirmation();
  const message = required(args.message, 'message');
  const imageUrl = args['image-url'];
  const link = args.link;

  const result = imageUrl
    ? await graph(`${required(pageId, 'META_PAGE_ID')}/photos`, {
        method: 'POST',
        body: { url: imageUrl, caption: message, published: true },
      })
    : await graph(`${required(pageId, 'META_PAGE_ID')}/feed`, {
        method: 'POST',
        body: { message, ...(link ? { link } : {}) },
      });

  console.log(JSON.stringify({ published: true, platform: 'facebook', id: result.id }, null, 2));
}

async function publishInstagramImage() {
  requirePublishConfirmation();
  const caption = required(args.message, 'message');
  const imageUrl = required(args['image-url'], 'image-url');
  const accountId = required(instagramId, 'META_INSTAGRAM_ACCOUNT_ID');

  const container = await graph(`${accountId}/media`, {
    method: 'POST',
    body: { image_url: imageUrl, caption },
  });

  let ready = false;
  for (let attempt = 0; attempt < 20; attempt += 1) {
    const status = await graph(`${container.id}?fields=status_code`);
    if (status.status_code === 'FINISHED') {
      ready = true;
      break;
    }
    if (status.status_code === 'ERROR' || status.status_code === 'EXPIRED') {
      throw new Error(`Instagram media container failed: ${status.status_code}`);
    }
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
  if (!ready) throw new Error('Instagram media container timed out before publishing');

  const result = await graph(`${accountId}/media_publish`, {
    method: 'POST',
    body: { creation_id: container.id },
  });
  console.log(JSON.stringify({ published: true, platform: 'instagram', id: result.id }, null, 2));
}

const handlers = {
  verify,
  facebook: publishFacebook,
  'instagram-image': publishInstagramImage,
};

if (!handlers[mode]) throw new Error(`Unsupported mode: ${mode}`);
await handlers[mode]();
