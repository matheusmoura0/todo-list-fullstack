const { todos } = require('../models');

export const findAll = async (req, res) => { 
    const Alltodos = await todos.findAll();
    res.json(Alltodos);
}