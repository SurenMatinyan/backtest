import {
    Sequelize,
    Model,
    DataTypes,
    HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyHasAssociationMixin,
    Association,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin,
    Optional,
  } from "sequelize";

  import Product from './product-model';
  import User from "./users-model";

  interface BasketAttributes {
    id?: number;
    ProductId: number;
    UserId: number;
  }
  
  interface BasketCreationAttributes extends Optional<BasketAttributes, "id"> {}
  
  class Basket extends Model<BasketAttributes, BasketCreationAttributes>
    implements BasketAttributes {
    public id?: number; 
    public ProductId!: number;
    public UserId!: number;   
  
   
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  

  
   
    public readonly products?: Product[]; 
  
    public static associations: {
      products: Association<Basket, Product>;
      users: Association<Basket, User>
    };



    public static  initialization(sequelize: Sequelize){
        this.init(
            {
                ProductId: { type: DataTypes.INTEGER },
                UserId: { type: DataTypes.INTEGER }
            },
        
            {
              tableName: "basket",
              sequelize, 
            }
          );
    }

  }
  export default Basket;
  
  
  


  
