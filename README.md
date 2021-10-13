# intelimetrica-test

Restaurants REST API 

This API is made by Melp to provide useful information about restaurants to users.

It has the following nomenclature:

http://localhost:3000/api

This API is documented with Swagger, it can be found in the endpoint:

- /docs

For restaurant CRUD operations, these are the endpoints:

- GET /restaurants
- GET /restaurants/{id} **
- POST /restaurants
- PUT /restaurants/{id}
- DELETE /restaurants/{id}

** This endpoint also can be used to get the statistics, the URL looks like:
- GET /restaurants/statistics?latitude=19.43278271&longitude=-99.13955183&radius=202.0421507

** If an id is given, it retrieves a restaurant if the id exists. To get the statistics is necessary to give the parameters preceded by the world 'statistics'. Example: /api/restaurant/statistics?latitude=19.43278271&longitude=-99.13955183&radius=202.0421507