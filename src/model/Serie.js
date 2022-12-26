import mongoose from "mongoose";

const serieSchema = new mongoose.Schema(
    {
        id: {type: String},
        serie: {type: String, required: true},
        trailerUrl: {type: String, required: true},
        descricao: { type: String, required: true},
        estrelando: {type: String, required: true},
        criacao: {type: String, required: true},
        temporadas:{type: mongoose.Schema.Types.ObjectId, ref: 'temporadas'}
    }
)