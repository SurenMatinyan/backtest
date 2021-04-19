import {
    Sequelize,
    Model,
    DataTypes,
    Association,
    HasManyCreateAssociationMixin,
    Optional,
  } from "sequelize";


  interface ParentAttributes {
    id?: number;
    name: string;
    ParentId: number | null;
  }
  
  interface ParentCreationAttributes extends Optional<ParentAttributes, "id"> {}
  
  class Parent extends Model<ParentAttributes, ParentCreationAttributes>
    implements ParentAttributes {
    public id?: number; 
    public name!: string;
    public ParentId!: number | null;
   
  
   
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  

    public createChildren!: HasManyCreateAssociationMixin<Parent>;
  
   
    public readonly products?: Parent[]; 
  
    public static associations: {
      products: Association<Parent, Parent>;
    };



    public static  initialization(sequelize: Sequelize){
        this.init(
            {
              name: {
                type: DataTypes.STRING(128),
              },
              ParentId: { type: DataTypes.INTEGER, defaultValue: null}
            },
               
        
            {
              tableName: "parents",
              sequelize, 
            }
          );
    }

  }
  export default Parent;
  
  
  


  
