import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)
//Obs: estamos usando o banco de dados mongoDB Atlas com a conexão a API_Series.
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterleoluz.zoaawnu.mongodb.net/API_Series?`);
let db = mongoose.connection;
export default db;