import {
    Sequelize,
    Model,
    DataTypes,
    Association,
    Optional,
  } from "sequelize";

import productModel from '../product-model';
import parentModel from './parent-model';

  interface CategoryAttributes {
    id?: number;
    ProductId: number  | undefined;
    ParentId: number;
  }
  
  interface CategoryCreationAttributes extends Optional<CategoryAttributes, "id"> {}
  
  class Category extends Model<CategoryAttributes, CategoryCreationAttributes>
    implements CategoryAttributes {
    public id?: number; 
    public ProductId!: number | undefined;
    public ParentId!: number;   
  
   
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  

  
   
    public readonly products?: Category[]; 
  
    public static associations: {
      products: Association<Category, productModel>;
      parents: Association<Category, parentModel>
    };



    public static  initialization(sequelize: Sequelize){
        this.init(
            {
                ProductId: { type: DataTypes.INTEGER },
                ParentId: { type: DataTypes.INTEGER }
            },
        
            {
              tableName: "productCategoria",
              sequelize, 
            }
          );
    }

  }
  export default Category;
  
  
  


  
