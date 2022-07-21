const usersService = require('../services/users.service');

const getAllUsers = async (req, res) => {
    try {
         const getAllUsers = 'hey'      
        res.json(getAllUsers);
    } catch (error) {
        res.status(500).json({ error, msg: "something went wrong" });   
    }
}

module.exports = {
    getAllUsers
}