const { route } = require('../api')

const router = require('express').Router()

const { Transaction } = require('../../db')

router.get('/', async (req, res) => {
	const transactions = await Transaction.findAll()
	res.json(transactions)
})

router.get('/amount', async (req, res) => {
	const transactions = await Transaction.findAll()
	let totalAmount = transactions.reduce((acc, transaction) => {
		return acc + transaction.amount
	}, 0)
	res.json(totalAmount)
})

router.post('/', async (req, res) => {
	const transaction = await Transaction.create(req.body)
	res.json(transaction)
})

module.exports = router
