// PM2 process config for Next.js runtime server.
// Used by deploy-vps.yml after atomic release swap.
module.exports = {
  apps: [{
    name: 'plizio',
    cwd: '/home/erik/plizio/current',
    script: './node_modules/.bin/next',
    args: 'start -p 3000',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    max_memory_restart: '2G',
    env: {
      NODE_ENV: 'production',
      PORT: '3000',
    },
    error_file: '/home/erik/plizio/logs/plizio-err.log',
    out_file: '/home/erik/plizio/logs/plizio-out.log',
    merge_logs: true,
    time: true,
  }],
};
