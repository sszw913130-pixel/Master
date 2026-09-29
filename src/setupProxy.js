const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      pathFilter: "/api",
      target: "https://m1.apifoxmock.com/m1/8767039-8555893-default",
      changeOrigin: true,
      logger: console,
    }),
  )
}
