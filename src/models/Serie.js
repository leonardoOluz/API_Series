import mongoose from "mongoose";

const serieSchema = new mongoose.Schema(
    {
        id: { type: String },
        series: { type: String, required: true },
        trailerUrl: { type: String, required: true },
        description: { type: String, required: true },
        starring: { type: String, required: true },
        creation: { type: String, required: true },
        seasons: [{
            title: {type: String},
            trailerUrl: {type: String},
            description: {type: String}
        }]
    }
)

const series = mongoose.model('series', serieSchema);
export default series;