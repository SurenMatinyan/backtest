import userModel from './users-model';
import productModel from './product-model';
import sequelize from '../connect/pgSQL';
import basketModel from './basket-model';
import parentModel from './category/parent-model';
import categoryModel from './category/Category-model';

const modelArr = [userModel, productModel, basketModel, categoryModel, parentModel];

modelArr.forEach(model => model.initialization(sequelize));
sequelize.sync({force: false});


userModel.hasMany(productModel);
productModel.belongsTo(userModel);
productModel.hasMany(basketModel);
userModel.hasMany(basketModel);
basketModel.belongsTo(userModel);
basketModel.belongsTo(productModel);

productModel.hasMany(categoryModel)
categoryModel.belongsTo(productModel);

parentModel.hasMany(categoryModel);
categoryModel.belongsTo(parentModel);
parentModel.hasMany(parentModel);
parentModel.belongsTo(parentModel);


export { userModel, productModel, basketModel, categoryModel, parentModel }