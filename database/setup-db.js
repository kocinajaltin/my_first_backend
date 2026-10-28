const fs = require('fs')

require('dotenv').config()

const sql = fs.readFileSync(__dirname + '/setup.sql').toString()

const db = require('./db')

db.query(sql)
    .then(data => console.log('Set-up Complete.'))
    .catch(error => console.log(error))