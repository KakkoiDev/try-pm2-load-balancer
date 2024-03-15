module.exports = {
  apps: [
    {
      name: "try-pm2-load-balancer",
      script: "index.js",
      instances: "max",
    },
  ],
};
