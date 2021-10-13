const pool = require('../config/database');

const getPointsInside = async (lat, lng, r, req, res) => {
    
    if (r < 0) return res.status(400).json({msg:'Radius must be positive'})

    const z = Math.pow(r, 2);

    let query = 'SELECT id, lat, lng, rating FROM restaurants';
    
    let data = await pool.query(query);
    
    let ratings = []

    data.rows.forEach(row => {
        const isInside = Math.pow((row.lng + lng),2) + Math.pow(row.lat + lat,2) <= z;
        if(isInside) ratings.push(row.rating)
    })

    if(ratings.length === 0) return res.status(200).json({msg:'No restaurant is inside the circunference'})

    const response = {count:ratings.length}

    response.avg = (ratings.reduce((a,b) => a + b)) / ratings.length;

    response.stdDeviation = Math.sqrt( (ratings.map(rating => Math.pow((rating - response.avg), 2)).reduce((a,b) => a + b)) / (ratings.length - 1) )
    
    res.status(200).json(response)
}

const getRestaurantById = async (req, res) => {
    try{
        const {id} = req.params
        
        const query = `SELECT * FROM restaurants WHERE id='${id}'`;

        const data = await pool.query(query);

        if (data.rowCount === 0) return res.status(404).json({msg:'Restaurant not found'});
        
        res.status(200).json(data.rows);
    }
    catch(e){
        console.log(e.toString())
        res.status(400).json({msg:'Something went wrong'})
    }
}

module.exports = {getPointsInside, getRestaurantById};