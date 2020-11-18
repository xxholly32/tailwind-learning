module.exports = {
  // https://github.com/QingWei-Li/vue-markdown-loader/issues/61
  parallel: false,
  publicPath:
    process.env.NODE_ENV === "production" ? "/tailwind-learning/" : "/",
  chainWebpack: (config) => {
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .options({
        raw: true,
      });
  },
};
