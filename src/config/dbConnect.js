import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const DB_USER = process.env.DB_USER// trocando o process para o seu login
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)// trocando o process para a sua senha

//Obs: estamos usando o banco de dados mongoDB Atlas com a conexão a API_Series.
// No MongoDB você pode copiar e passar o link da aplicação direto no conncet sem necessidade de uso dos templates strings e as variaveis.
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterleoluz.zoaawnu.mongodb.net/API_Series?`);
let db = mongoose.connection;
export default db;