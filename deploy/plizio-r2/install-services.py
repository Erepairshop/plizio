from pathlib import Path
import subprocess,json
units={
'plizio-r2-gateway.service':'''[Unit]
Description=Plizio direct R2 object reader (no directory listing)
After=network-online.target
Wants=network-online.target
[Service]
User=www-data
Group=www-data
LoadCredential=r2.conf:/etc/erepairshop-media-offload/rclone.conf
ExecStart=/usr/bin/python3 -B /opt/plizio-media-offload/gateway.py
Restart=on-failure
RestartSec=5
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=true
MemoryMax=256M
TasksMax=48
[Install]
WantedBy=multi-user.target
''',
'plizio-r2-initial-copy.service':'''[Unit]
Description=Plizio throttled initial image copy and full byte verification
After=network-online.target
Wants=network-online.target
[Service]
Type=oneshot
ExecStart=/usr/bin/python3 -B /opt/plizio-media-offload/pipeline.py --initial
TimeoutStartSec=infinity
Nice=15
IOSchedulingClass=idle
CPUQuota=50%
MemoryMax=768M
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=read-only
ReadWritePaths=/var/lib/plizio-media-offload
''',
'plizio-r2-incremental.service':'''[Unit]
Description=Plizio changed-image copy and byte verification
After=network-online.target
Wants=network-online.target
[Service]
Type=oneshot
ExecStart=/usr/bin/python3 -B /opt/plizio-media-offload/pipeline.py
TimeoutStartSec=infinity
Nice=15
IOSchedulingClass=idle
CPUQuota=50%
MemoryMax=768M
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=read-only
ReadWritePaths=/var/lib/plizio-media-offload
''',
'plizio-r2-incremental.timer':'''[Unit]
Description=Upload and verify new Plizio images every thirty minutes
[Timer]
OnBootSec=10min
OnUnitInactiveSec=30min
RandomizedDelaySec=30
Unit=plizio-r2-incremental.service
[Install]
WantedBy=timers.target
'''}
for name,text in units.items():
 p=Path('/etc/systemd/system')/name
 assert not p.exists(),'Unit already exists, inspect instead of overwriting: '+name
for name,text in units.items():(Path('/etc/systemd/system')/name).write_text(text)
subprocess.run(['systemd-analyze','verify',*[str(Path('/etc/systemd/system')/x)for x in units]],check=True)
subprocess.run(['systemctl','daemon-reload'],check=True)
subprocess.run(['systemctl','enable','--now','plizio-r2-gateway.service'],check=True)
subprocess.run(['systemctl','start','--no-block','plizio-r2-initial-copy.service'],check=True)
print(json.dumps({'gateway':'started','initialCopy':'started','incrementalTimer':'installed-not-yet-enabled','bandwidthMiB':2,'cpuQuotaPercentOfOneCore':50,'localDeleted':0}))
