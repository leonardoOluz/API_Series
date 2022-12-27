import mongoose from "mongoose";

const serieSchema = new mongoose.Schema(
    {
        id: { type: String },
        series: { type: String, required: true },
        trailerUrl: { type: String, required: true },
        description: { type: String, required: true },
        starring: { type: String, required: true },
        creation: { type: String, required: true },
        seasons: [{type: mongoose.SchemaTypes.ObjectId, ref: 'seasons', required: false}]
    }
)

const series = mongoose.model('series', serieSchema);
export default series;