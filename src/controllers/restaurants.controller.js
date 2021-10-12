const pool = require('../config/database');

const getRestaurants = async (req, res) => {
    
    try{
        const query = 'SELECT * FROM restaurants';

        const data = await pool.query(query);
        console.log(data.rows)
        res.send('ok')
    }
    catch(e){

    }
}

module.exports = {getRestaurants}