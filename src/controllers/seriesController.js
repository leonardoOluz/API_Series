import series from "../models/Serie.js";

class serieController {
    // Create - series object
    static registerSeries = (req, res) => {
        let serie = new series(req.body)
        serie.save((err) => {
            if (!err) {
                res.status(201).send('Series registered successfully!');
            } else {
                res.status(400).send({ message: `${err.message} 'Error registering series!.` });
            }
        })
    }
    static registerSeasonsSeriesById = (req, res) => {
        let id = req.params.id
        series.findByIdAndUpdate(id,{$push: req.body},(err, series) => {
            if (!err) {
                res.status(201).send(`season added successfully`)
            } else {
                res.status(400).send({message: `${err.message} Unable to add season, check id!.`})
            }
        })
    }
    // Read - series object
    static listSeries = (req, res) => {
        series.find()
            .populate('seasons')
            .exec((err, series) => {
                if (!err) {
                    res.status(200).json(series);
                } else {
                    res.status(500).send({ message: `${err.message} Erro!` })
                }
            })
    }
    static listSeriesId = (req, res) => {
        let id = req.params.id
        series.findById(id)
        .populate('seasons')
            .exec((err, series) => {
                if (!err) {
                    res.status(200).json(series)
                } else {
                    res.status(400).send({ message: `${err.message} ID not found!.` })
                }
            })
    }
    // Update - series object
    static updatingSeriesId = (req, res) => {
        let id = req.params.id
        series.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send(`series updated successfully`)
            } else {
                res.status(400).send({ message: `${err.message} ID not found!.` })
            }
        })
    }
    // Delete - series object
    static deleteObjectSeriesById = (req, res) => {
        let id = req.params.id
        series.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send(`Series deleted successfully`)
            } else {
                res.status(400).send({ message: `${err.message} check serial id!.` })
            }
        })
    }
}

export default serieController;