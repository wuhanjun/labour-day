module.exports = {
  apps: [
    {
      name: 'labour-day',
      script: 'pnpm',
      args: 'start',
      cwd: '/root/github/labour-day',
      instances: 1,
      autorestart: true,
      watch: ['.next/static', '.next/server'],
      ignore_watch: ['node_modules', '.next/cache'],
      watch_delay: 5000,
      max_memory_restart: '400M',
      env: {
        NODE_ENV: 'production',
        PORT: 4003,
      },
    },
  ],
}