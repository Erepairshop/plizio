<?php
declare(strict_types=1);

const POSTCARD_DIR = '/home/erik/plizio/shared/postcards';
const MAX_UPLOAD_BYTES = 8 * 1024 * 1024;
const MIN_WIDTH = 600;
const MIN_HEIGHT = 600;
const MAX_PIXELS = 24000000;
const DAILY_LIMIT = 12;

function json_response(int $status, array $payload): never {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function clean_text(mixed $value, int $max): string {
    return mb_substr(trim((string)$value), 0, $max);
}

function valid_origin(): bool {
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $referer = $_SERVER['HTTP_REFERER'] ?? '';
    if ($origin !== '') return (bool)preg_match('#^https?://(www\.)?plizio\.com$#i', $origin);
    return $referer !== '' && (bool)preg_match('#^https?://(www\.)?plizio\.com/#i', $referer);
}

function client_ip(): string {
    $raw = $_SERVER['HTTP_CF_CONNECTING_IP']
        ?? $_SERVER['HTTP_X_FORWARDED_FOR']
        ?? $_SERVER['REMOTE_ADDR']
        ?? '0';
    return trim(explode(',', $raw)[0]);
}

function valid_token(string $token): bool {
    return (bool)preg_match('/^[a-f0-9]{64}$/', $token);
}

function card_dir(string $token): string {
    return POSTCARD_DIR . '/' . $token;
}

function remove_tree(string $dir): void {
    if (!is_dir($dir)) return;
    foreach (scandir($dir) ?: [] as $item) {
        if ($item === '.' || $item === '..') continue;
        $path = $dir . '/' . $item;
        if (is_dir($path)) remove_tree($path); else @unlink($path);
    }
    @rmdir($dir);
}

function load_meta(string $token): ?array {
    if (!valid_token($token)) return null;
    $path = card_dir($token) . '/meta.json';
    if (!is_file($path)) return null;
    $meta = json_decode((string)file_get_contents($path), true);
    if (!is_array($meta)) return null;
    $expires = $meta['expires_at'] ?? null;
    if (is_string($expires) && $expires !== '' && strtotime($expires) <= time()) {
        remove_tree(card_dir($token));
        return null;
    }
    return $meta;
}

function save_meta(string $dir, array $meta): void {
    $tmp = $dir . '/meta.json.tmp';
    $written = file_put_contents(
        $tmp,
        json_encode($meta, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
        LOCK_EX
    );
    if ($written === false || !rename($tmp, $dir . '/meta.json')) {
        @unlink($tmp);
        throw new RuntimeException('meta_write');
    }
    chmod($dir . '/meta.json', 0640);
}

function check_rate_limit(): void {
    if (!is_dir(POSTCARD_DIR)) mkdir(POSTCARD_DIR, 0775, true);
    $path = POSTCARD_DIR . '/.rate.json';
    $handle = fopen($path, 'c+');
    if (!$handle) json_response(500, ['ok' => false, 'error' => 'rate_storage']);
    flock($handle, LOCK_EX);
    $raw = stream_get_contents($handle);
    $rates = json_decode($raw ?: '{}', true);
    if (!is_array($rates)) $rates = [];
    $now = time();
    $key = hash('sha256', client_ip());
    $recent = array_values(array_filter($rates[$key] ?? [], static fn($value): bool => (int)$value > $now - 86400));
    if (count($recent) >= DAILY_LIMIT) {
        flock($handle, LOCK_UN);
        fclose($handle);
        json_response(429, ['ok' => false, 'error' => 'rate']);
    }
    $recent[] = $now;
    $rates[$key] = $recent;
    foreach ($rates as $rateKey => $values) {
        $valid = array_values(array_filter((array)$values, static fn($value): bool => (int)$value > $now - 86400));
        if ($valid) $rates[$rateKey] = $valid; else unset($rates[$rateKey]);
    }
    rewind($handle);
    ftruncate($handle, 0);
    fwrite($handle, json_encode($rates));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
    chmod($path, 0660);
}

function cleanup_expired_cards(int $scanLimit = 120): void {
    $dirs = glob(POSTCARD_DIR . '/[a-f0-9]*', GLOB_ONLYDIR) ?: [];
    $checked = 0;
    foreach ($dirs as $dir) {
        if ($checked++ >= $scanLimit) break;
        $path = $dir . '/meta.json';
        if (!is_file($path)) continue;
        $meta = json_decode((string)file_get_contents($path), true);
        $expires = is_array($meta) ? ($meta['expires_at'] ?? null) : null;
        if (is_string($expires) && $expires !== '' && strtotime($expires) <= time()) remove_tree($dir);
    }
}

function copy_for(string $lang): array {
    $all = [
        'de' => ['title' => 'Eine persönliche Postkarte aus %s', 'description' => 'Jemand hat dir eine persönliche Reisepostkarte mit Plizio geschickt.', 'heading' => 'Eine Postkarte für dich', 'open' => 'Postkarte öffnen', 'download' => 'Herunterladen', 'share' => 'Weiterleiten', 'create' => 'Eigene Postkarte gestalten', 'expires' => 'Verfügbar bis %s', 'forever' => 'Dauerhaft verfügbar'],
        'hu' => ['title' => 'Személyes képeslap innen: %s', 'description' => 'Valaki személyes utazási képeslapot küldött neked a Plizióval.', 'heading' => 'Képeslap érkezett neked', 'open' => 'Képeslap kinyitása', 'download' => 'Letöltés', 'share' => 'Továbbküldés', 'create' => 'Saját képeslap készítése', 'expires' => 'Elérhető eddig: %s', 'forever' => 'Korlátlan ideig elérhető'],
        'en' => ['title' => 'A personal postcard from %s', 'description' => 'Someone sent you a personal travel postcard made with Plizio.', 'heading' => 'A postcard has arrived for you', 'open' => 'Open postcard', 'download' => 'Download', 'share' => 'Share', 'create' => 'Create your own postcard', 'expires' => 'Available until %s', 'forever' => 'Available without expiry'],
        'ro' => ['title' => 'O carte poștală personală din %s', 'description' => 'Cineva ți-a trimis o carte poștală personală de călătorie creată cu Plizio.', 'heading' => 'Ai primit o carte poștală', 'open' => 'Deschide cartea poștală', 'download' => 'Descarcă', 'share' => 'Distribuie', 'create' => 'Creează propria carte poștală', 'expires' => 'Disponibilă până la %s', 'forever' => 'Disponibilă fără expirare'],
    ];
    return $all[$lang] ?? $all['en'];
}

function render_card(string $token, array $meta): never {
    $escape = static fn(mixed $value): string => htmlspecialchars((string)$value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $lang = in_array($meta['lang'] ?? '', ['de', 'hu', 'en', 'ro'], true) ? $meta['lang'] : 'en';
    $copy = copy_for($lang);
    $place = clean_text($meta['place'] ?? '', 80) ?: clean_text($meta['country'] ?? '', 60) ?: 'Plizio';
    $title = sprintf($copy['title'], $place);
    $description = $copy['description'];
    $base = 'https://plizio.com';
    $url = $base . '/postcard/p/' . $token . '/';
    $asset = $base . '/postcard-assets/' . $token . '.webp';
    $socialImage = $base . '/postcard-assets/' . $token . '.jpg';
    $download = '/postcard-share.php?token=' . rawurlencode($token) . '&asset=1&download=1';
    $expires = $meta['expires_at'] ?? null;
    $expiryText = $expires
        ? sprintf($copy['expires'], (new DateTimeImmutable($expires))->format('Y-m-d'))
        : $copy['forever'];
    $nonce = rtrim(strtr(base64_encode(random_bytes(18)), '+/', '-_'), '=');
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: public, max-age=300');
    header('X-Robots-Tag: noindex, nofollow, noarchive');
    header('X-Content-Type-Options: nosniff');
    header("Content-Security-Policy: default-src 'none'; img-src 'self'; style-src 'nonce-$nonce'; script-src 'nonce-$nonce' https://stats.plizio.com; connect-src https://stats.plizio.com; base-uri 'none'; form-action 'none'; frame-ancestors 'none'");
    echo '<!doctype html><html lang="' . $escape($lang) . '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
        . '<title>' . $escape($title) . '</title><meta name="description" content="' . $escape($description) . '">'
        . '<link rel="canonical" href="' . $escape($url) . '"><meta property="og:type" content="website"><meta property="og:site_name" content="Plizio">'
        . '<meta property="og:title" content="' . $escape($title) . '"><meta property="og:description" content="' . $escape($description) . '"><meta property="og:url" content="' . $escape($url) . '">'
        . '<meta property="og:image" content="' . $escape($socialImage) . '"><meta property="og:image:secure_url" content="' . $escape($socialImage) . '"><meta property="og:image:type" content="image/jpeg">'
        . '<meta property="og:image:width" content="' . (int)($meta['width'] ?? 1200) . '"><meta property="og:image:height" content="' . (int)($meta['height'] ?? 1500) . '"><meta property="og:image:alt" content="' . $escape($title) . '">'
        . '<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="' . $escape($title) . '"><meta name="twitter:description" content="' . $escape($description) . '"><meta name="twitter:image" content="' . $escape($socialImage) . '"><meta name="referrer" content="no-referrer">'
        . '<script defer src="https://stats.plizio.com/script.js" data-website-id="b718db4e-ee1b-43db-a89a-af4ecc5435bf"></script>'
        . '<style nonce="' . $nonce . '">:root{color-scheme:light;font-family:Georgia,serif;background:#e8dcc6;color:#30271f}*{box-sizing:border-box}body{margin:0;min-height:100vh;background:radial-gradient(circle at 20% 10%,#fff8e8 0,transparent 34%),repeating-linear-gradient(0deg,#8d6d4510 0 1px,transparent 1px 10px),#e8dcc6}.wrap{width:min(940px,100%);margin:auto;padding:28px 18px 48px;text-align:center}.brand{display:inline-block;color:#332a21;text-decoration:none;font:900 18px/1 system-ui;letter-spacing:.2em}.eyebrow{margin:28px 0 10px;color:#9b4632;font:800 12px/1 system-ui;letter-spacing:.16em;text-transform:uppercase}h1{margin:0 auto 24px;max-width:680px;font-size:clamp(2rem,6vw,4.2rem);line-height:.98}.scene{position:relative;margin:0 auto;width:min(760px,100%);min-height:360px;perspective:1300px}.envelope{position:absolute;inset:auto 5% 3% 5%;height:55%;border:1px solid #a78b63;background:#d5b989;box-shadow:0 20px 50px #49331d33;transition:opacity .5s 1.1s}.envelope:before{content:"";position:absolute;inset:0;background:linear-gradient(145deg,transparent 49.5%,#bea172 50%) left/50% 100% no-repeat,linear-gradient(215deg,transparent 49.5%,#c8aa78 50%) right/50% 100% no-repeat}.flap{position:absolute;z-index:3;left:5%;right:5%;bottom:30%;height:45%;transform-origin:top;clip-path:polygon(0 0,100% 0,50% 100%);background:#e1c796;border-top:1px solid #a78b63;animation:flap 1s .25s forwards}.card{position:relative;z-index:2;width:88%;margin:auto;transform:translateY(34%) scale(.92);opacity:.96;animation:arrive 1.15s .7s cubic-bezier(.2,.75,.2,1) forwards}.card img{display:block;width:100%;max-height:72vh;object-fit:contain;border:10px solid #fffaf0;border-radius:5px;background:#fffaf0;box-shadow:0 25px 70px #3b28184d}.open{position:absolute;z-index:5;inset:42% auto auto 50%;transform:translate(-50%,-50%);border:0;border-radius:999px;padding:13px 22px;background:#9b4632;color:white;font:800 14px/1 system-ui;cursor:pointer;box-shadow:0 8px 24px #5e291f55;animation:hideOpen .3s 1.25s forwards}.actions{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:25px}.actions a,.actions button{border:1px solid #6f594033;border-radius:999px;padding:11px 18px;background:#fff8e8;color:#392f25;text-decoration:none;font:800 14px/1 system-ui;cursor:pointer}.actions .primary{background:#9b4632;color:#fff;border-color:#9b4632}.expiry{font:600 12px/1.4 system-ui;color:#6f6254;margin-top:16px}@keyframes flap{to{transform:rotateX(178deg);z-index:0}}@keyframes arrive{to{transform:translateY(0) scale(1);opacity:1}}@keyframes hideOpen{to{opacity:0;visibility:hidden}}@media(max-width:600px){.wrap{padding-inline:10px}.scene{min-height:300px}.card{width:96%}.card img{border-width:6px}.envelope,.flap{left:2%;right:2%}}@media(prefers-reduced-motion:reduce){.flap,.card,.open{animation:none}.card{transform:none}.open{display:none}}</style></head><body>'
        . '<main class="wrap"><a class="brand" href="/">PLIZIO</a><p class="eyebrow">' . $escape($copy['open']) . '</p><h1>' . $escape($copy['heading']) . '</h1>'
        . '<div class="scene"><div class="envelope"></div><div class="flap"></div><article class="card"><img src="' . $escape($asset) . '" width="' . (int)($meta['width'] ?? 1200) . '" height="' . (int)($meta['height'] ?? 1500) . '" alt="' . $escape($title) . '"></article><button class="open" type="button">' . $escape($copy['open']) . '</button></div>'
        . '<div class="actions"><a href="' . $escape($download) . '" download>' . $escape($copy['download']) . '</a><button id="share" type="button">' . $escape($copy['share']) . '</button><a class="primary" href="/postcard/?lang=' . $escape($lang) . '">' . $escape($copy['create']) . '</a></div><p class="expiry">' . $escape($expiryText) . '</p></main>'
        . '<script nonce="' . $nonce . '">addEventListener("load",function(){try{umami.track("postcard_open",{lang:' . json_encode($lang) . '})}catch(e){}});document.querySelector(".open").onclick=function(){this.style.display="none"};document.getElementById("share").onclick=async function(){if(navigator.share){try{await navigator.share({title:' . json_encode($title) . ',text:' . json_encode($description) . ',url:location.href});try{umami.track("postcard_recipient_share",{lang:' . json_encode($lang) . '})}catch(e){}return}catch(e){if(e&&e.name==="AbortError")return}}try{await navigator.clipboard.writeText(location.href);this.textContent="✓"}catch(e){}};</script></body></html>';
    exit;
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$token = clean_text($_GET['token'] ?? '', 64);

if ($method === 'GET' && $token !== '') {
    $meta = load_meta($token);
    if (!$meta) {
        http_response_code(410);
        header('Cache-Control: no-store');
        exit('Gone');
    }
    if (isset($_GET['asset'])) {
        $format = ($_GET['format'] ?? '') === 'jpg' ? 'jpg' : 'webp';
        $image = card_dir($token) . '/card.' . $format;
        if (!is_file($image)) {
            http_response_code(404);
            exit;
        }
        header('Content-Type: ' . ($format === 'jpg' ? 'image/jpeg' : 'image/webp'));
        header('Content-Length: ' . filesize($image));
        header('Cache-Control: public, max-age=86400');
        header('X-Content-Type-Options: nosniff');
        if (isset($_GET['download'])) {
            header('Content-Disposition: attachment; filename="plizio-postcard.webp"');
        }
        readfile($image);
        exit;
    }
    render_card($token, $meta);
}

if ($method !== 'POST') {
    header('Allow: GET, POST');
    json_response(405, ['ok' => false, 'error' => 'method']);
}
if (!valid_origin()) json_response(403, ['ok' => false, 'error' => 'origin']);
if (clean_text($_POST['website'] ?? '', 200) !== '') json_response(200, ['ok' => true]);
if (($_POST['consent'] ?? '') !== 'yes') json_response(400, ['ok' => false, 'error' => 'consent']);
if (!isset($_FILES['card']) || !is_array($_FILES['card'])) json_response(400, ['ok' => false, 'error' => 'missing_card']);

$upload = $_FILES['card'];
if (($upload['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) json_response(400, ['ok' => false, 'error' => 'upload']);
$size = (int)($upload['size'] ?? 0);
if ($size < 1024 || $size > MAX_UPLOAD_BYTES) json_response(413, ['ok' => false, 'error' => 'size']);
$tmpUpload = (string)($upload['tmp_name'] ?? '');
$mime = (new finfo(FILEINFO_MIME_TYPE))->file($tmpUpload);
if (!in_array($mime, ['image/webp', 'image/png', 'image/jpeg'], true)) json_response(415, ['ok' => false, 'error' => 'type']);

$lang = clean_text($_POST['lang'] ?? 'en', 2);
if (!in_array($lang, ['de', 'hu', 'en', 'ro'], true)) $lang = 'en';
$theme = clean_text($_POST['theme'] ?? 'vintage', 20);
if (!in_array($theme, ['vintage', 'polaroid', 'airmail', 'scrapbook', 'minimal'], true)) $theme = 'vintage';
$expiry = clean_text($_POST['expiry'] ?? '30', 10);
if (!in_array($expiry, ['7', '30', 'forever'], true)) $expiry = '30';

check_rate_limit();
cleanup_expired_cards();
$token = bin2hex(random_bytes(32));
$dir = card_dir($token);
if (!mkdir($dir, 0770, true)) json_response(500, ['ok' => false, 'error' => 'storage']);
$target = $dir . '/card.webp';
$socialTarget = $dir . '/card.jpg';

try {
    Imagick::setResourceLimit(Imagick::RESOURCETYPE_MEMORY, 192);
    Imagick::setResourceLimit(Imagick::RESOURCETYPE_MAP, 384);
    $image = new Imagick($tmpUpload);
    if ($image->getNumberImages() > 1) $image->setIteratorIndex(0);
    $width = $image->getImageWidth();
    $height = $image->getImageHeight();
    if ($width < MIN_WIDTH || $height < MIN_HEIGHT || ($width * $height) > MAX_PIXELS) throw new RuntimeException('dimensions');
    $image->stripImage();
    $image->setImagePage(0, 0, 0, 0);
    if ($width > 1600 || $height > 2400) $image->thumbnailImage(1600, 2400, true, true);
    $image->setImageFormat('webp');
    $image->setImageCompressionQuality(84);
    $image->writeImage($target);
    $width = $image->getImageWidth();
    $height = $image->getImageHeight();
    $image->setImageFormat('jpeg');
    $image->setImageCompressionQuality(88);
    $image->writeImage($socialTarget);
    $image->clear();
    $image->destroy();
    chmod($target, 0644);
    chmod($socialTarget, 0644);
} catch (Throwable $error) {
    remove_tree($dir);
    json_response(422, ['ok' => false, 'error' => $error->getMessage() === 'dimensions' ? 'dimensions' : 'decode']);
}

$expiresAt = $expiry === 'forever' ? null : date(DATE_ATOM, time() + ((int)$expiry * 86400));
$meta = [
    'token' => $token,
    'created_at' => date(DATE_ATOM),
    'expires_at' => $expiresAt,
    'lang' => $lang,
    'theme' => $theme,
    'place' => clean_text($_POST['place'] ?? '', 80),
    'country' => clean_text($_POST['country'] ?? '', 60),
    'width' => $width,
    'height' => $height,
    'bytes' => filesize($target),
    'social_bytes' => filesize($socialTarget),
];
try {
    save_meta($dir, $meta);
} catch (Throwable) {
    remove_tree($dir);
    json_response(500, ['ok' => false, 'error' => 'meta_storage']);
}

json_response(201, [
    'ok' => true,
    'url' => '/postcard/p/' . $token . '/',
    'expires_at' => $expiresAt,
]);
