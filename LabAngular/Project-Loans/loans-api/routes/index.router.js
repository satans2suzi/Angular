const assetRoute = require('./assets/assets.router')
const assetsPlacedRouter = require('./assets/assets_placed.router')
const documentRouter = require('./documentary/documentary.router');
const userRouter = require('./auth/users.router')
function route(app) {
    app.use('/api/auth', userRouter)
    app.use('/api/asset', assetRoute)
    app.use('/api/asset_placed', assetsPlacedRouter)
    app.use('/api/documentary', documentRouter)

}

module.exports = route;
