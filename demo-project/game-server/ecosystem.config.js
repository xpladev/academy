module.exports = {
  apps : [{
    name: "xplaGamethonServer",
    script: "ts-node ./index",
    exec_mode: 'cluster_mode',
    autorestart: true,
    wait_ready: true,  
    listen_timeout: 50000,
    kill_timeout: 5000,
    max_memory_restart: '1G',
    watch: true
  }]
}
