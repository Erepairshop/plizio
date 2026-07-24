<?php
declare(strict_types=1);

const SUBMISSION_DIR = '/home/erik/plizio/shared/poi-image-submissions';
const APPROVED_DIR = '/home/erik/plizio/shared/poi-user-images';
const CORE_IMAGE_DIR = '/home/erik/plizio/shared/poi-images';
const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
const MIN_WIDTH = 640;
const MIN_HEIGHT = 360;
const MAX_PIXELS = 60000000;
const NTFY_URL = 'https://ntfy.sh/plizio-borota25-alerts';

function json_response(int $status, array $payload): never {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function clean_text(mixed $value, int $max): string {
    return mb_substr(trim((string)$value), 0, $max);
}

function client_ip(): string {
    $raw = $_SERVER['HTTP_CF_CONNECTING_IP']
        ?? $_SERVER['HTTP_X_FORWARDED_FOR']
        ?? $_SERVER['REMOTE_ADDR']
        ?? '0';
    return trim(explode(',', $raw)[0]);
}

function valid_origin(): bool {
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $referer = $_SERVER['HTTP_REFERER'] ?? '';
    if ($origin !== '') return (bool)preg_match('#^https?://(www\.)?plizio\.com$#i', $origin);
    return $referer === '' || (bool)preg_match('#^https?://(www\.)?plizio\.com/#i', $referer);
}

function submission_path(string $token): string {
    return SUBMISSION_DIR . '/' . $token;
}

function load_meta(string $token): ?array {
    if (!preg_match('/^[a-f0-9]{64}$/', $token)) return null;
    $path = submission_path($token) . '/meta.json';
    if (!is_file($path)) return null;
    $data = json_decode((string)file_get_contents($path), true);
    return is_array($data) ? $data : null;
}

function save_meta(string $token, array $meta): void {
    $path = submission_path($token) . '/meta.json';
    $tmp = $path . '.tmp';
    file_put_contents(
        $tmp,
        json_encode($meta, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
        LOCK_EX
    );
    rename($tmp, $path);
}

function send_ntfy(array $headers, string $body): void {
    $ch = curl_init(NTFY_URL);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $body,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 8,
        CURLOPT_HTTPHEADER => $headers,
    ]);
    curl_exec($ch);
    curl_close($ch);
}

function render_review(string $token, array $meta): never {
    $e = static fn(mixed $v): string => htmlspecialchars((string)$v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $status = $meta['status'] ?? 'pending';
    $pending = $status === 'pending';
    $asset = '/poi-image.php?token=' . rawurlencode($token) . '&asset=1';
    $page = $meta['page_url'] ?? '';
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: no-store');
    echo '<!doctype html><html lang="hu"><meta name="viewport" content="width=device-width,initial-scale=1">'
        . '<title>Plizio képfeltöltés moderáció</title><style>'
        . ':root{color-scheme:light;background:#eee8dc;color:#30271f;font:16px/1.5 Georgia,serif}'
        . 'body{margin:0;padding:24px}.card{max-width:820px;margin:auto;background:#fffaf0;border:1px solid #c9b99d;border-radius:18px;padding:20px;box-shadow:0 14px 40px #493a2722}'
        . 'img{display:block;width:100%;max-height:62vh;object-fit:contain;background:#ded5c5;border-radius:12px}'
        . 'h1{font-size:1.45rem;margin:.2rem 0 1rem}dl{display:grid;grid-template-columns:max-content 1fr;gap:5px 14px}dt{font-weight:700}dd{margin:0;overflow-wrap:anywhere}'
        . '.actions{display:flex;gap:12px;margin-top:18px;flex-wrap:wrap}button,a.btn{border:0;border-radius:999px;padding:11px 19px;font:700 15px Georgia,serif;cursor:pointer;text-decoration:none}'
        . '.yes{background:#236b43;color:white}.no{background:#9c2f2f;color:white}.page{background:#ded5c5;color:#30271f}.status{padding:10px 13px;border-radius:10px;background:#ded5c5;font-weight:700}'
        . '</style><body><main class="card"><h1>Beküldött POI-kép</h1>'
        . '<img src="' . $e($asset) . '" alt="Beküldött kép">'
        . '<dl><dt>POI</dt><dd>' . $e($meta['poi_name'] ?? '') . ' <code>' . $e($meta['poi_id'] ?? '') . '</code></dd>'
        . '<dt>Beküldve</dt><dd>' . $e($meta['created_at'] ?? '') . '</dd>'
        . '<dt>Méret</dt><dd>' . $e(($meta['width'] ?? '?') . ' × ' . ($meta['height'] ?? '?') . ' px, ' . round(((int)($meta['bytes'] ?? 0)) / 1024) . ' KB') . '</dd>'
        . '<dt>Beküldő</dt><dd>' . $e($meta['display_name'] ?? 'névtelen') . (($meta['email'] ?? '') !== '' ? ' · ' . $e($meta['email']) : '') . '</dd>'
        . '</dl>';
    if ($pending) {
        echo '<form class="actions" method="post" action="/poi-image.php">'
            . '<input type="hidden" name="token" value="' . $e($token) . '">'
            . '<button class="yes" name="action" value="approve">Jóváhagyás</button>'
            . '<button class="no" name="action" value="reject">Elutasítás</button>'
            . ($page !== '' ? '<a class="btn page" href="' . $e($page) . '" target="_blank" rel="noopener">POI-oldal</a>' : '')
            . '</form>';
    } else {
        echo '<p class="status">Állapot: ' . $e($status) . '</p>';
    }
    echo '</main></body></html>';
    exit;
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$token = clean_text($_GET['token'] ?? $_POST['token'] ?? '', 64);

if ($method === 'GET' && $token !== '') {
    $meta = load_meta($token);
    if (!$meta) {
        http_response_code(404);
        exit('Not found');
    }
    if (isset($_GET['asset'])) {
        $image = submission_path($token) . '/candidate.webp';
        if (!is_file($image)) {
            http_response_code(404);
            exit;
        }
        header('Content-Type: image/webp');
        header('Content-Length: ' . filesize($image));
        header('Cache-Control: private, no-store');
        header('X-Content-Type-Options: nosniff');
        readfile($image);
        exit;
    }
    render_review($token, $meta);
}

if ($method !== 'POST') {
    header('Allow: GET, POST');
    json_response(405, ['ok' => false, 'error' => 'method']);
}

// Moderation is a POST so link scanners and ntfy previews cannot approve a submission.
if ($token !== '' && isset($_POST['action'])) {
    $meta = load_meta($token);
    if (!$meta) json_response(404, ['ok' => false, 'error' => 'not_found']);
    if (($meta['status'] ?? '') !== 'pending') render_review($token, $meta);
    $action = clean_text($_POST['action'], 16);
    $source = submission_path($token) . '/candidate.webp';
    $poiId = (string)$meta['poi_id'];
    if ($action === 'approve') {
        if (!is_file($source)) json_response(409, ['ok' => false, 'error' => 'missing_asset']);
        if (is_file(CORE_IMAGE_DIR . '/' . $poiId . '.webp')) {
            json_response(409, ['ok' => false, 'error' => 'core_image_exists']);
        }
        if (!is_dir(APPROVED_DIR)) mkdir(APPROVED_DIR, 0775, true);
        $target = APPROVED_DIR . '/' . $poiId . '.webp';
        $tmp = $target . '.tmp-' . bin2hex(random_bytes(4));
        if (!copy($source, $tmp) || !rename($tmp, $target)) {
            @unlink($tmp);
            json_response(500, ['ok' => false, 'error' => 'publish_failed']);
        }
        chmod($target, 0644);
        $meta['status'] = 'approved';
        $meta['moderated_at'] = date(DATE_ATOM);
        save_meta($token, $meta);
        send_ntfy(
            ['Title: Plizio POI-kep jovahagyva', 'Tags: white_check_mark,frame_with_picture'],
            ($meta['poi_name'] ?? $poiId) . "\n/poi-user-images/" . $poiId . '.webp'
        );
    } elseif ($action === 'reject') {
        $meta['status'] = 'rejected';
        $meta['moderated_at'] = date(DATE_ATOM);
        save_meta($token, $meta);
        @unlink($source);
    } else {
        json_response(400, ['ok' => false, 'error' => 'action']);
    }
    render_review($token, $meta);
}

if (!valid_origin()) json_response(403, ['ok' => false, 'error' => 'origin']);
if (clean_text($_POST['website'] ?? '', 200) !== '') json_response(200, ['ok' => true]);
if (($_POST['rights'] ?? '') !== 'yes') json_response(400, ['ok' => false, 'error' => 'rights']);

$poiId = clean_text($_POST['poi_id'] ?? '', 180);
if (!preg_match('/^[a-zA-Z0-9][a-zA-Z0-9_-]{1,179}$/', $poiId)) {
    json_response(400, ['ok' => false, 'error' => 'poi_id']);
}
if (is_file(CORE_IMAGE_DIR . '/' . $poiId . '.webp') || is_file(APPROVED_DIR . '/' . $poiId . '.webp')) {
    json_response(409, ['ok' => false, 'error' => 'image_exists']);
}
if (!isset($_FILES['image']) || !is_array($_FILES['image'])) {
    json_response(400, ['ok' => false, 'error' => 'missing_image']);
}
$upload = $_FILES['image'];
if (($upload['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) {
    json_response(400, ['ok' => false, 'error' => 'upload']);
}
$size = (int)($upload['size'] ?? 0);
if ($size < 1024 || $size > MAX_UPLOAD_BYTES) {
    json_response(413, ['ok' => false, 'error' => 'size']);
}
$tmpUpload = (string)$upload['tmp_name'];
$mime = (new finfo(FILEINFO_MIME_TYPE))->file($tmpUpload);
$allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'];
if (!in_array($mime, $allowed, true)) {
    json_response(415, ['ok' => false, 'error' => 'type']);
}

// Per-IP limit: at most three accepted uploads in 24 hours.
if (!is_dir(SUBMISSION_DIR)) mkdir(SUBMISSION_DIR, 0775, true);
$rateFile = SUBMISSION_DIR . '/.rate.json';
$rates = json_decode((string)@file_get_contents($rateFile), true) ?: [];
$rateKey = hash('sha256', client_ip());
$now = time();
$rates[$rateKey] = array_values(array_filter($rates[$rateKey] ?? [], static fn($t) => $t > $now - 86400));
if (count($rates[$rateKey]) >= 3) json_response(429, ['ok' => false, 'error' => 'rate']);

$token = bin2hex(random_bytes(32));
$dir = submission_path($token);
if (!mkdir($dir, 0770, true)) json_response(500, ['ok' => false, 'error' => 'storage']);
$candidate = $dir . '/candidate.webp';

try {
    Imagick::setResourceLimit(Imagick::RESOURCETYPE_MEMORY, 192);
    Imagick::setResourceLimit(Imagick::RESOURCETYPE_MAP, 384);
    $image = new Imagick($tmpUpload);
    if ($image->getNumberImages() > 1) $image->setIteratorIndex(0);
    if (method_exists($image, 'autoOrient')) {
        $image->autoOrient();
    } elseif (method_exists($image, 'autoOrientImage')) {
        $image->autoOrientImage();
    }
    $width = $image->getImageWidth();
    $height = $image->getImageHeight();
    if ($width < MIN_WIDTH || $height < MIN_HEIGHT || ($width * $height) > MAX_PIXELS) {
        throw new RuntimeException('dimensions');
    }
    $image->stripImage();
    $image->setImageFormat('webp');
    $image->setImageCompressionQuality(82);
    if ($width > 1600 || $height > 1600) {
        $image->thumbnailImage(1600, 1600, true, true);
    }
    $image->writeImage($candidate);
    $width = $image->getImageWidth();
    $height = $image->getImageHeight();
    $image->clear();
    $image->destroy();
} catch (Throwable $e) {
    @unlink($candidate);
    @rmdir($dir);
    json_response(422, ['ok' => false, 'error' => $e->getMessage() === 'dimensions' ? 'dimensions' : 'decode']);
}

$meta = [
    'token' => $token,
    'status' => 'pending',
    'created_at' => date(DATE_ATOM),
    'poi_id' => $poiId,
    'poi_name' => clean_text($_POST['poi_name'] ?? $poiId, 240),
    'page_url' => preg_match(
        '#^https://(www\.)?plizio\.com/#i',
        clean_text($_POST['page_url'] ?? '', 600)
    ) ? clean_text($_POST['page_url'] ?? '', 600) : '',
    'lang' => clean_text($_POST['lang'] ?? '', 8),
    'display_name' => clean_text($_POST['display_name'] ?? '', 120),
    'email' => clean_text($_POST['email'] ?? '', 200),
    'original_mime' => $mime,
    'bytes' => filesize($candidate),
    'width' => $width,
    'height' => $height,
    'ip_hash' => $rateKey,
    'ua' => clean_text($_SERVER['HTTP_USER_AGENT'] ?? '', 220),
];
save_meta($token, $meta);
$rates[$rateKey][] = $now;
file_put_contents($rateFile, json_encode($rates), LOCK_EX);

$base = 'https://plizio.com/poi-image.php?token=' . rawurlencode($token);
$body = "Új POI-kép jóváhagyásra\n"
    . ($meta['poi_name'] ?: $poiId) . " (" . $poiId . ")\n"
    . "Beküldő: " . ($meta['display_name'] ?: 'névtelen')
    . ($meta['email'] ? ' · ' . $meta['email'] : '')
    . "\nJóváhagyás: " . $base;
send_ntfy(
    [
        'Title: Uj Plizio POI-kep',
        'Tags: frame_with_picture,eyes',
        'Priority: high',
        'Click: ' . $base,
        'Attach: ' . $base . '&asset=1',
        'Filename: ' . $poiId . '.webp',
    ],
    $body
);

json_response(201, ['ok' => true]);
