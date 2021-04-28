import express, {Application} from 'express';
import usersRout from './router/users';
import productRout from './router/product-router';
import categoryRout from './router/category-router';
import cors from 'cors';
import path from 'path';
require('./connect/pgSQL');
import dotenv from 'dotenv';
//https://www.youtube.com/watch?v=z4BNZfZ1Wq8 postgres typescript && typescript response  ;;

const PORT = process.env.PORT || 3001 

const app: Application = express();
app.listen(PORT, () => {
    console.log(`connect in port ${PORT}`);
})
dotenv.config();

console.log(process.env.JWTKEY)



app.use(express.static(path.join(__dirname, '/public')))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/users', usersRout);
app.use('/product', productRout);
app.use('/category', categoryRout);




