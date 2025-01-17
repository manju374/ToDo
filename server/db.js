const env = require("dotenv");

env.config();
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.USER_NAME,
    host: process.env.HOST_NAME,
    database: process.env.DATA_BASE,
    password: process.env.PASS_WORD,
    port: process.env.PORT_NO,
});

module.exports = pool;