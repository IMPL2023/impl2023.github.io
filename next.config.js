module.exports = {
    basePath: '/portfolio',
    assetPrefix: '/portfolio/',
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
      return {
        '/': { page: '/' },
        '/home': { page: '/' },
        '/joinus': { page: '/joinus' },
        '/fun': { page: '/fun' },
        '/funding': { page: '/funding' },
        '/group': { page: '/group' },
        '/publications': { page: '/publications' },
        // 更多页面...
      }
    },
    // 你可以在这里添加更多的配置
  }
  