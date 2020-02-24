const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'tmp_uploads/' });
const db = require(__dirname + '/_connect_db');

const app = express();

app.set('view engine', 'ejs');

app.use('/items', require(__dirname + '/item'));

app.get('/', (req, res) => {
    res.send('WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww')
})
app.use(express.static(__dirname + '/../public'))

app.use((req, res) => {
    // res.type('text/plain')
    res.type('text/html')
    res.status(404);
    res.send('<h2>找不到頁面</h2>')
    // res.send('找不到頁面')
})

app.listen(3000, () => {
    console.log('express server start');
})