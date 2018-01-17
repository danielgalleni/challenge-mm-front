var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Challenge MaxMilhas' });
});

router.get('/consult', function(res, res, next) {
  res.render('consult', { title: 'Challenge MaxMilhas' });
});

module.exports = router;