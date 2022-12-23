import mongoose from "mongoose";
//Obs: estamos usando o banco de dados mongoDB Atlas com a conexão a API_Series.
mongoose.connect('mongodb+srv://LeoAlura:Leo123@clusterleoluz.zoaawnu.mongodb.net/API_Series?');
let db = mongoose.connection;
export default db;