const { todos } = require('../models');

export const findAll = async (req, res) => { 
    const Alltodos = await todos.findAll();
    res.json(Alltodos);
}

export const getById = async (req, res) => {
    const todo = await todos.findByPk(req.params.id);
    res.json(todo);
}