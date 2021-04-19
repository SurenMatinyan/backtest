/*import { Model, DataTypes, Optional } from 'sequelize';
import postgreSQLConnect from "../connect/pgSQL";
import productModel from './product-model-postgres';
import usersModel from './users-model-postgres';



export interface BasketModel {
  id?: number
  user_id: number
  product_id: number 
}

interface BasketCreationAttributes extends Optional<BasketModel, "id"> {}

interface BasketInstance
  extends Model<BasketModel, BasketCreationAttributes>,
  BasketModel {}

const basketModel = postgreSQLConnect.define<BasketInstance>('baskets', {
  user_id: { type: DataTypes.INTEGER },
  product_id: { type: DataTypes.INTEGER }
});

basketModel.belongsTo(usersModel);



basketModel.sync({force: true})
  .then()
  .catch(Err => console.log("error sync", Err.message));

export default basketModel;*/