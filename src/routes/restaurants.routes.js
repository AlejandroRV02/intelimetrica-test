const {Router} = require('express');
const router = Router();

const {getRestaurants} = require('../controllers/restaurants.controller');

router.get('/', getRestaurants)


module.exports = router;