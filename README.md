# Backend - Personal budget tracker app - CASHFLOW

## How to use

[clone this repo](https://github.com/juanjparedez/challenge_backend.git)

notes: You will need a SQL server running in which you will have to create a database called "cashflow" and configure the .env file with the data of the mentioned server.

You will also need the Frontend:
to do it [clone this repo](https://github.com/juanjparedez/challenge_frontend.git):

Create a .env file on root folder with this content

PORT=(3001 | if you choose another remember to modify this in the proxy in package.json on the Frontend )
DB_NAME=cashflow
DB_USER=(DB User)
DB_PASS=(DB User Password)
DB_HOST=(SQL Server Endpoint URL)

Install it and run:

```sh
npm install
```

```sh
npm start
```

or the development option

```sh
npm run dev
```

bibliography

Budget Categories: https://wealthynickel.com/personal-budget-categories/
