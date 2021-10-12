const {Router} = require('express');
const router = Router();

/** 
* @swagger
*components:
*    schemas:
*        Restaurant:
*            type: object
*            properties:
*                rating: 
*                    type: integer
*                    description: Number between 0 and 4
*                name: 
*                    type: string
*                    description: Name of the restaurant
*                site: 
*                    type: string
*                    description: URL of the restaurant
*                email:
*                    type: string,
*                    description: Email of the restaurant
*                phone:
*                    type: string,
*                    description: Phone of the restaurant
*                street:
*                    type: string
*                    description: Street where the restaurant is located
*                city:
*                    type: string
*                    description: City where the restaurant is located
*                state:
*                    type: string
*                    description: State where the restaurant is located
*                lat:
*                    type: float
*                    description: Latitude
*                lng:
*                    type: float
*                    description: Longitude
*            example:
*               rating: 3
*               name: Restaurant 1
*               site: http://restaurant1.com
*               email: restaurant1@mail.com
*               phone: 123456
*               street: Calle 1
*               city: Ciudad 1
*               state: Estado 1
*               lat: 20.4412851137021
*               lng: -100.1308549949321
*       
*/

const {getRestaurants, getRestaurant, createRestaurant, updateRestaurant, deleteRestaurant} = require('../controllers/restaurants.controller');

// Get All Restaurants
/**
 * @swagger
 * /api/restaurants:
 *  get:
 *    summary: Get all restaurants
 *    responses:
 *      200:
 *          description: Query executed successfully
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Restaurant'
 *      400:
 *          description: Something went wrong
 */
router.get('/', getRestaurants)

// Get a restaurant by id
/**
 * @swagger
 * /api/restaurants/{id}:
 *  get:
 *    summary: Get a restaurant by id
 *    parameters: 
 *      - in: path
 *        name: id
 *        description: Unique identifier of a restaurant
 *        required: true
 *        schema:
 *          type: string 
 *    responses:
 *      200:
 *          description: Query executed successfully
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Restaurant'
 *      404:
 *          description: Restaurant not found
 *      400:
 *          description: Something went wrong
 */
router.get('/:id', getRestaurant)

// Create a new restaurant
/**
 * @swagger
 * /api/restaurants:
 *  post:
 *    summary: Create a new restaurant
 *    requestBody :
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Restaurant'
 *    responses:
 *      201:
 *          description: Restaurant created successfully
 *      400:
 *          description: Something went wrong
 */
router.post('/', createRestaurant)

// Update a restaurant
/**
 * @swagger
 * /api/restaurants/{id}:
 *  put:
 *    summary: Update a restaurant by id
 *    parameters: 
 *      - in: path
 *        name: id
 *        description: Unique identifier of a restaurant
 *        required: true
 *        schema:
 *          type: string 
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/RestaurantNoId'
 *    responses:
 *      200:
 *          description: Restaurant updated successfully
 *      404:
 *          description: Restaurant not found
 *      400:
 *          description: Something went wrong
 */
router.put('/:id', updateRestaurant)

// Delete a restaurant
/**
 * @swagger
 * /api/restaurants/{id}:
 *  delete:
 *    summary: Delete a restaurant by id
 *    parameters: 
 *      - in: path
 *        name: id
 *        description: Unique identifier of a restaurant
 *        required: true
 *        schema:
 *          type: string 
 *    responses:
 *      200:
 *          description: Restaurant deleted successfully
 *      404:
 *          description: Restaurant not found
 *      400:
 *          description: Something went wrong
 */
router.delete('/:id', deleteRestaurant)


module.exports = router;