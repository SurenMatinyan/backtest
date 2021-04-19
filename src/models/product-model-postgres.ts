/*import { Model, DataTypes, Optional } from 'sequelize';
import postgreSQLConnect from "../connect/pgSQL";
import basketModel from './basket-model-postgres';



export interface ProductModel {
  id?: number;
  name: string
  price: string
  count: string
}

interface ProductCreationAttributes extends Optional<ProductModel, "id"> {}

interface ProductInstance
  extends Model<ProductModel, ProductCreationAttributes>,
  ProductModel {}

 const productModels = postgreSQLConnect.define<ProductInstance>('products', {
  name:  DataTypes.STRING,
  price:  DataTypes.INTEGER,
  count: DataTypes.INTEGER
}, {  }
  );


productModels.hasOne(basketModel);


productModels.sync({force: false})
  .then()
  .catch(Err => console.log("error sync", Err.message));

export default productModels;*/