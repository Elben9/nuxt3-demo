module.exports = {
  apps: [
    {
      name: 'test nuxt3',
      exec_mode: 'cluster', // 集群模式
      instances: 'max', // Or a number of instances 根据cpu可用核数运行最实例个数
      script: './.output/server/index.mjs', // 项目启动文件
      args: 'start', // npm run start:test
      watch: true, // 启动热重载
      // 配置环境变量，这里的环境变量要与nuxt里边的`package.json`文件的变量相同
      ignore_watch: ['node_modules', 'logs'],
      env_prod: {
        NODE_ENV: 'production',
        MODE: 'prod',
      },
      env_test: {
        NODE_ENV: 'test',
        MODE: 'test',
      },
      env_dev: {
        NODE_ENV: 'development',
        MODE: 'dev',
      },
    },
  ],
}
