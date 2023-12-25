const { Pool } = require('pg')


const pool = new Pool({
    host: 'postgres',
    port: 5432,
    user: 'admin123',
    password: 'postgres',
    database: 'my_shop'
});
    

module.exports = pool;