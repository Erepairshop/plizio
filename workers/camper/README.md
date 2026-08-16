# Plizio Camper Worker

Cloudflare Worker for the PlizioGo car and motorhome route planner. It calls
OpenRouteService, reads camper stops from the `CAMPER` KV namespace and returns
the route, suggested overnight stops and country guidance.

## Secrets

`ORS_KEY` must exist as a Cloudflare Worker secret. Never put the ORS key or a
Cloudflare API token in this repository.

## Checks

Run from the repository root:

```powershell
node --test workers/camper/test/index.test.mjs
```

## Deployment

Deployment is manual and requires explicit approval:

```powershell
Set-Location workers/camper
npx -y wrangler@4.123.0 deploy
```

Authentication is supplied through Wrangler login or the
`CLOUDFLARE_API_TOKEN` environment variable. A code deploy retains the existing
`ORS_KEY` secret and uses the configured `CAMPER` KV binding.
