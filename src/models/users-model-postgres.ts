/*import { Model, DataTypes, Optional } from 'sequelize';
import postgreSQLConnect from "../connect/pgSQL";
import basketModel from './basket-model-postgres';



export interface UserModel {
  id?: number;
  lastName: string
  firstName: string
  email: string
  password: string
}

interface UserCreationAttributes extends Optional<UserModel, "id"> {}

interface UserInstance
  extends Model<UserModel, UserCreationAttributes>,
  UserModel {}

 const MyDefineModel = postgreSQLConnect.define('user', {
  lastName:  DataTypes.STRING,
  firstName:  DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});


MyDefineModel.hasMany(basketModel);

MyDefineModel.sync({force: false})
  .then()
  .catch(Err => console.log("error sync", Err.message));


export default MyDefineModel;*/