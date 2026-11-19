import http.server,threading,urllib.parse,urllib.error,json
from pathlib import Path
from r2util import request
slots=threading.BoundedSemaphore(16)
class Handler(http.server.BaseHTTPRequestHandler):
 protocol_version='HTTP/1.1'
 def log_message(self,*args):pass
 def do_HEAD(self):self.serve('HEAD')
 def do_GET(self):self.serve('GET')
 def serve(self,method):
  if not slots.acquire(timeout=10):self.send_error(503);return
  try:
   key=urllib.parse.unquote(urllib.parse.urlsplit(self.path).path).lstrip('/')
   if'\x00'in key or key.endswith('/'):self.send_error(404);return
   tombstones=Path('/var/lib/plizio-media-offload/tombstones.json')
   if tombstones.exists()and key in json.loads(tombstones.read_text()).get('keys',[]):self.send_error(404);return
   hs={k:self.headers[k]for k in ['Range','If-None-Match','If-Modified-Since']if self.headers.get(k)}
   try:r=request(key,method,hs)
   except urllib.error.HTTPError as e:
    if e.code==304:self.send_response(304);self.send_header('Content-Length','0');self.end_headers();return
    self.send_error(404 if e.code==404 else 502);return
   with r:
    self.send_response(r.status)
    for k in ['Content-Type','Content-Length','ETag','Last-Modified','Content-Range','Accept-Ranges']:
     if r.headers.get(k):self.send_header(k,r.headers[k])
    self.send_header('Cache-Control','public, max-age=2592000')
    self.send_header('X-Plizio-Media-Source','r2');self.send_header('X-Content-Type-Options','nosniff');self.end_headers()
    if method!='HEAD':
     while True:
      b=r.read(131072)
      if not b:break
      self.wfile.write(b)
  except (BrokenPipeError,ConnectionResetError):pass
  except Exception:
   self.close_connection=True
   try:self.send_error(502)
   except Exception:pass
  finally:slots.release()
class Server(http.server.ThreadingHTTPServer):
 daemon_threads=True;request_queue_size=64
Server(('127.0.0.1',8691),Handler).serve_forever()
