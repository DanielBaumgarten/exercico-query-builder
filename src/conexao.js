const knex = require('knex')({
    cliente: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'devs1986',
        database: 'exercicio_query_builder'
    }
});

module.exports = knex