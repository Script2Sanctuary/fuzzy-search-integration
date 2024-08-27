import { Sequelize } from "sequelize";

const db = new Sequelize('fuzzy_search', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
