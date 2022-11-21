const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  /*  //打包时不生成.map后缀文件
    productionSourceMap: false,

    lintOnSave: false,*/
    // 基本路径
    publicPath: "./",
  /*  // 输出文件目录
    outputDir: "dist",
    // 用于嵌套生成的静态资产（js，css，img，fonts）的目录。
    assetsDir: "./",

    // devServer: {
    //     // 项目运行时候的端口号
    //     port: 8088,
    // },
    devServer: {
        open: true,
        // host: 'localhost',
        port: 8080,
        https: false,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: {//配置跨域
            '/api': {
                // target: 'http://192.168.0.80:8080',//这里后台的地址模拟的;应该填写你们真实的后台接口
                target: 'http://127.0.0.1:8080',
                // target: 'http://192.168.0.153:8080',
                // target: 'http://192.168.0.208:8080',
                ws: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': '/'//请求的时候使用这个api就可以
                },
                //   logLevel: 'debug' // 用于检查代理的真实地址
            }
        }
    },
    /!**
     * 别名映射文件路径
     *!/
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'))
            .set('utils', resolve('src/utils'))
            .set('store', resolve('src/store'))
            .set('plugins', resolve('src/plugins'))
    },
    configureWebpack: {
    }*/
};
