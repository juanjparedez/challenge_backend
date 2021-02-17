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
	if (req.body.category != 'Income') {
		req.body.amount = -req.body.amount
	}
	const transaction = await Transaction.create(req.body)
	res.json(transaction)
})

router.put('/:transactionID', async (req, res) => {
	await Transaction.update(req.body, {
		where: { id: req.params.transactionID },
	})
	let updated = await Transaction.findByPk(req.params.transactionID)
	res.json(updated)
})

router.delete('/:transactionID', async (req, res) => {
	await Transaction.destroy({
		where: { id: req.params.transactionID },
	})

	res.json({
		success: `Se ha borrado de la tabla el elemento con ID: ${req.params.transactionID}`,
	})
})

module.exports = router
