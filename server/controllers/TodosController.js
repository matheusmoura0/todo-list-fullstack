const { todos } = require('../models');

export const findAll = async (req, res) => { 
    const Alltodos = await todos.findAll();
    res.json(Alltodos);
};

export const getById = async (req, res) => {
    const todo = await todos.findByPk(req.params.id);
    res.json(todo);
};

export const update = async (req, res) => { 
     await todos.update(req.body, { where: { id: req.params.id } });
    res.json({ message: 'Todo updated successfully' });
};

export const create = async (req, res) => {
    await todos.create(req.body);
    res.json({ message: 'Todo created successfully' });
};