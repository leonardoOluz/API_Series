import mongoose from "mongoose";

const seasonSchema = mongoose.Schema(
    {
        title: {type: String, required: true},
        trailerUrl: {type: String, required: true},
        description: {type: String, required: true}
    }
)

const seasons = mongoose.model('seasons', seasonSchema);

export default seasons;