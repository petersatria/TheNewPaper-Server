const Controller = require("../controllers")
const authentication = require("../middleware/authentication")
const errorHandler = require("../middleware/errorHandler")

const router = require('express').Router()

router
  .use('/', require('./users'))
  .use('/api', require('./customers'))
  .use(authentication)
  .use('/articles', require('./articles'))
  .get('/categories', Controller.findCategories)
  .get('/histories', Controller.history)
  .use(errorHandler)

module.exports = router