import {Sequelize} from 'sequelize';


const connectInPGsql = new Sequelize("test1234", "test12", "1234", {
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false
})

connectInPGsql.authenticate()
    .then(() => console.log("connected in postgres DB test1234"))
    .catch(err => console.log("don't connect", err.message));


export default connectInPGsql;