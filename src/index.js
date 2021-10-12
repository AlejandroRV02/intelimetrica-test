const express = require('express');
require('dotenv').config();

PORT = process.env.PORT;

const app = express();

const restaurantsRoutes = require('./routes/restaurants.routes');

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// Routes
app.use('/restaurants', restaurantsRoutes);

app.listen(PORT, console.log(`Running on PORT ${PORT}`))