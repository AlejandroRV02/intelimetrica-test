const express = require('express');
require('dotenv').config();
const path = require('path');
const cors = require('cors')

// Swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerConf = {
    definition: {
        openapi: "3.0.1",
        info:{
            title: "Restaurants REST API",
            description: "This API is made by Melp to provide useful information about restaurants to users.",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`],
} 


PORT = process.env.PORT;

const app = express();

const restaurantsRoutes = require('./routes/restaurants.routes');

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerConf)))


// Routes
app.use('/api/restaurants', restaurantsRoutes);

app.listen(PORT, console.log(`Running on PORT ${PORT}`))