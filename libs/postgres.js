const { Client } = require('pg')

async function getConnection() {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'admin123',
        password: 'postgres',
        database: 'my_shop'
    });
    await client.connect()
    return client;
}

module.exports = getConnection;