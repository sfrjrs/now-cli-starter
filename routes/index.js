const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res) => {
    res.render('form', { title: 'Registration Form' });
});

module.exports = router;