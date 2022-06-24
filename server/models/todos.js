export const Todos = (sequelize, DataTypes) => { 
    return sequelize.define('todos', { 
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
    });
};

