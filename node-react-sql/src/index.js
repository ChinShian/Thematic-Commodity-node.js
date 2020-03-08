const express = require('express');
const cors =require('cors');
const mysql = require('mysql');

const app = express();

const sql = "SELECT * FROM `items`";

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'commodity2',
});
db.on('error', (event) => {
    console.log(event);
});
db.connect();

app.use(cors());

app.get('/',(req,res)=>{
    res.send('hello')
})

app.get('/try-db', (req, res) => {
    
    db.query(sql, (error, result, fields) => {
        if (!error) {
            res.json({data:result});
        } else {
            res.end(error);
        }
    });
});

app.listen(5500,()=>{
    console.log('express server start')
})