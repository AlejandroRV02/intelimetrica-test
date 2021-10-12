const {Router} = require('express');
const router = Router();

const {getRestaurants, getRestaurant, createRestaurant, updateRestaurant, deleteRestaurant} = require('../controllers/restaurants.controller');

router.get('/', getRestaurants)
router.get('/:id', getRestaurant)
router.post('/', createRestaurant)
router.put('/:id', updateRestaurant)
router.delete('/:id', deleteRestaurant)


module.exports = router;