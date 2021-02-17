const router = require('express').Router()

const apiFlowRouter = require('./api/flow')

router.use('/flow', apiFlowRouter)

module.exports = router
