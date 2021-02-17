module.exports = (sequelize, Secuelize) => {
	return sequelize.define('transaction', {
		id: {
			type: Secuelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Secuelize.STRING,
		},
		description: {
			type: Secuelize.STRING,
		},
		amount: {
			type: Secuelize.INTEGER,
		},
		category: {
			type: Secuelize.ENUM,
			values: [
				'Income',
				'Housing',
				'Transportation',
				'Food',
				'Utilities',
				'Personal',
				'Entertainment',
				'Insurance & Health Care',
				'Education',
				'Debt Payments',
				'Giving',
				'Saving',
			],
		},
		subcategory: {
			type: Secuelize.ENUM,
			values: [
				'Salary/hourly wages',
				'Bonuses or commission',
				'Investment income',
				'Interest income',
				'Side hustle income',
				'Child support',
				'Alimony',
				'Credit card rewards',

				'Mortgage',
				'Rent',
				'Property taxes',
				'Homeowner’s insurance or renter’s insurance',
				'Home Maintenance and repairs',
				'Home improvement',

				'Car payment',
				'Maintenance and repairs',
				'Auto insurance',
				'Fuel',
				'Public transportation passes',
				'Ride sharing',
				'Tolls',
				'Parking fees',
				'Vehicle registration and inspection',

				'Groceries',
				'Restaurants',
				'Work lunches',
				'Take-out/fast food',

				'Electricity',
				'Water',
				'Natural gas',
				'Garbage collection',
				'Phone',
				'Cable',
				'Internet',

				'Clothing',
				'Shoes',
				'Personal hygiene/toiletries',
				'Household supplies',
				'Child care',
				'Hair cuts',
				'Gym membership',
				'Home furnishings',

				'Movies/events',
				'Subscription services',
				'Vacations',
				'Hobbies',
				'Date nights',

				'Health/dental/vision insurance',
				'Life insurance',
				'Disability insurance',
				'Prescriptions and over-the-counter medicines',
				'Out-of-pocket healthcare expenses',

				'Tuition',
				'Extracurricular activities',
				'Books and school supplies',
				'Uniforms',
				'Registration and other fees',

				'Student loans',
				'Credit cards',
				'Personal loans',
				'Installment loans',

				'Religious',
				'Charities',
				'Gifts',

				'Retirement accounts',
				'Emergency fund',
				'Education fund',
				'Sinking fund',
			],
		},
	})
}
