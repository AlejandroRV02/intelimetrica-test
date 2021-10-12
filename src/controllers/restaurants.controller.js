const pool = require('../config/database');

const getRestaurants = async (req, res) => {
    
    try{
        const query = 'SELECT * FROM restaurants';

        const data = await pool.query(query);
        
        res.status(200).json(data.rows);
    }
    catch(e){
        res.status(400).json({msg:'Something went wrong'})
    }
}
const getRestaurant = async (req, res) => {
    try{
        const {id} = req.params
        
        const query = `SELECT * FROM restaurants WHERE id='${id}'`;

        const data = await pool.query(query);
        
        res.status(200).json(data.rows);
    }
    catch(e){
        res.status(400).json({msg:'Something went wrong'})
    }
}
const createRestaurant = async (req, res) => {
    try{

        const {id,rating ,name ,site ,email ,phone ,street ,city ,state ,lat, lng } = req.body;
        
        const query = `INSERT INTO restaurants VALUES('${id}',${rating},'${name}','${site}','${email}','${phone}','${street}','${city}','${state}',${lat},${lng})`;

        const data = await pool.query(query);
        
        res.status(201).json({msg:'User created successfully', data});

    }
    catch(e){
        res.status(400).json({msg:'Something went wrong'})
    }
}
const updateRestaurant = async (req, res) => {
    
    try{
        const {id} = req.params;
        
        let query = `SELECT * FROM restaurants WHERE id='${id}'`;

        let data = await pool.query(query);

        if (data.rowCount === 0) return res.status(404).json({msg:'Restaurant not found'});

        const {rating ,name ,site ,email ,phone ,street ,city ,state ,lat, lng } = req.body;

        query = `UPDATE restaurants SET rating=${rating}, name='${name}',site='${site}',email='${email}',phone='${phone}',street='${street}',city='${city}',state='${state}',lat=${lat},lng=${lng} WHERE id='${id}'`;
        
        data = await pool.query(query);
        
        res.status(200).json({msg:'Restaurant updated successfully'});
    }
    catch(e){
        console.log(e.toString())
        res.status(400).json({msg:'Something went wrong'})
    }
}
const deleteRestaurant = async (req, res) => {
    
    try{
        const {id} = req.params;
        const query = `DELETE FROM restaurants WHERE id='${id}'`;
        await pool.query(query)
        res.status(200).json({msg:`Restaurant with id ${id} deleted successfully`});
    }
    catch(e){
        res.status(400).json({msg:'Something went wrong'})
    }
}

module.exports = {
    getRestaurants,
    getRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
}