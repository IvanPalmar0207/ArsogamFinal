import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "arsogam",
    "root",
    "",
    {
        host : "localhost",
        dialect : "mysql"
    }
)

export default sequelize