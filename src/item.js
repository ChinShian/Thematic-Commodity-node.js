const express = require('express');
const db = require(__dirname + '/_connect_db');
const router = express.Router();

router.get('/item', (req, res) => {
    const sql = "SELECT * FROM `items`";
    db.queryAsync(sql)
        .then(result => {
            res.render('item', {
                items: result
            });
        })
});

module.exports = router;