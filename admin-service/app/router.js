module.exports = (app) => {
  const { controller, router } = app
  router.get('*', controller.home.index)
}