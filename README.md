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

Live Demo: https://restapi-flask-intelimetrica.herokuapp.com
Post Man Collection: https://www.getpostman.com/collections/2044b0d4fee1d0776bf8

** Clarification: Even though the app name indicates that the API was build using Flask, it was not.

FINAL NOTE: If the API is tested from /api/docs, apparently this endpoint there's conflict, but if is testes from the Post Man collection or even from the browser there's no problem.

# Tools

This API was made using the Node.js framework Express.js.
The database used is PostreSQL, the intention was to use PostGIS, but it was not used.
