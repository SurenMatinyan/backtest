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

  interface UserAttributes {
    id?: number;
    lastName: string
    firstName: string
    email: string
    password: string
   
  }
  
  interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}
  
  class User extends Model<UserAttributes, UserCreationAttributes>
    implements UserAttributes {
    public id?: number; 
    public lastName!: string;
    public firstName!: string;
    public email!: string;
    public password!: string;
    public  UserId!: number
   
  
   
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  
   
    public getBasket!: HasManyGetAssociationsMixin<Product>; 
    public addProduct!: HasManyAddAssociationMixin<Product, number>;
    public hasProduct!: HasManyHasAssociationMixin<Product, number>;
    public countProduct!: HasManyCountAssociationsMixin;
    public createProduct!: HasManyCreateAssociationMixin<Product>;
  
   
    public readonly products?: Product[]; 
  
    public static associations: {
      products: Association<User, Product>;
    };



    public static  initialization(sequelize: Sequelize){
        this.init(
            {
              lastName: {
                type: new DataTypes.STRING(128),
              },
              firstName: {
                type: new DataTypes.STRING(128),},
              email: { type: DataTypes.STRING, },
              password: { type: DataTypes.STRING },
            },
               
        
            {
              tableName: "users",
              sequelize, 
            }
          );
    }

  }
  export default User;
  
  
  


  
