# Plizio R2 media migration, owner authorization 2026-11-19

The public `/poi-images/` and `/sight-images/` URLs remain unchanged. Nginx
serves new local files first, then the loopback direct-object reader on port
8691. The reader uses S3 GET/HEAD, never a bucket-directory listing. This avoids
the historical cold-directory delay of the webshop rclone HTTP gateway.

The private bucket is `plizio-media-prod`. Credentials are loaded from the
existing protected rclone configuration by systemd `LoadCredential`; credentials
must never be committed, printed or passed in command-line arguments.

Installed runtime source: `/opt/plizio-media-offload`. State, catalogues,
scope manifests and copy/check logs: `/var/lib/plizio-media-offload`.

## Copy and new uploads

`plizio-r2-initial-copy.service` retains an exact file scope and copies it at
2 MiB/s, two transfers, with a 50% limit of one CPU core. It then performs full
downloaded byte comparison, checks every expected match and verifies local
size/inode/mtime stayed stable during the check. It never deletes local images.

`plizio-r2-incremental.timer` checks every thirty minutes. A shared nonblocking
lock prevents overlapping copies. Only new or changed local files are copied
and checked; unchanged verified files are skipped without remote reads. New
images remain available locally during upload. A failed copy/check retains local
images and evidence. Do not run broad repeated whole-catalogue checks manually.

Fetchers should import `availability.available(family, key)` once per worker
when deciding whether a requested image already exists. Checking only the local
file can needlessly redownload a verified R2 image. The helper uses a cached
catalogue, not one network request per image.

## Build compatibility

The four deployment workflows use `scripts/refresh-image-manifest.py`. It merges
local POI filenames and byte-verified R2 catalogue entries, including images no
longer stored locally. It uses no network calls. A damaged catalogue or missing
minimum coverage preserves the old manifest and fails the build step.

Do not replace this with an `os.listdir(shared/poi-images)`-only manifest after
offloading. No full build or deployment was authorized by this migration.

## Local cleanup gate

Initial copying is only a start, not a completed migration. Local removal must
wait for all of these independent proofs:

1. `initial/complete.json`, both `*-verified.json` and complete `*-matched.txt`.
2. `routing-verified.json`: actual origin and public URL byte/hash readback.
3. `build-compatibility.json`: the tested helper/workflows are on the shared
   deployment branch, and the incremental timer is active.
4. A recovery manifest copied to R2 and independently read back before deletion.

Hold the same `copy.lock` during cleanup. Remove only regular files from the
exact recorded image roots with unchanged size, inode and nanosecond mtime.
Preserve newer or changed files and all other shared directories, source work,
live releases, user submissions and webshop media. Verify original image URLs
and disk space again after cleanup. Record actual removals, not expected space.

The MSI `Plizio R2 Migration Followup 20261119` read-only scheduled watcher queues
one idempotent Bridge continuation when the full initial check finishes, or a
technical error review. It does not buy, publish or remove files itself.

## Intentional removal or replacement

Replacing an image must upload and verify the new bytes before removing the local
copy; preserve the existing URL and normal Cloudflare cache-purge policy.
To withdraw a bad image, also record its exact `family/filename` in the backed-up
`tombstones.json` `keys` list. Both the build helper and gateway honor that list.
Removing only a local file does not withdraw an already offloaded R2 object.
