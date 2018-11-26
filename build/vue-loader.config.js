module.exports = (isDev) => {
    return {
        preserveWhitepace: true,
        extractCSS: isDev,
        cssModules: {
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]', // 用法：在style标签上加 module，如 <style module>，好处：开发环境中方便定位到具体的文件，生产环境中具有一定的保密性
            camelCase: true
        },
        // hotReload: false // 根据环境变量生成
    }
}