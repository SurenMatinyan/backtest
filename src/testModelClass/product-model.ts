import {
    Model,
    DataTypes,
    HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyHasAssociationMixin,
    Association,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin,
    Optional,
    Sequelize,
  } from "sequelize";

  import User from './users-model';

  interface ProductAttributes {
    id?: number
    name: string
    price: number
    count: number
    img: string
    UserId: number
    ParentId: number
  }
  
  interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> {}

  class Product extends Model<ProductAttributes, ProductCreationAttributes>
    implements ProductAttributes {
        public id?: number
        public name!: string
        public price!: number
        public count!: number
        public img!: string
        public ParentId!: number
        public UserId!: number


        public readonly createdAt!: Date;
        public readonly updatedAt!: Date;


        public static associations: {
          products: Association<Product, User>;
        };


        public static initialization(sequelize: Sequelize){
            this.init({
                name: { type: DataTypes.STRING },
                price: { type: DataTypes.INTEGER },
                count: { type: DataTypes.INTEGER },
                img: {type: DataTypes.STRING},
                ParentId: { type: DataTypes.INTEGER},
                UserId: { type: DataTypes.INTEGER }
            }, {
              tableName: "products",
              sequelize, 
            } )
        }
    }


export default Product; 