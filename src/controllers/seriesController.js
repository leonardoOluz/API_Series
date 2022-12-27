import series from "../models/Serie.js";

class serieController {
    // Create - creating series object
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
    static registerNewSeasonById = (req, res) =>{
        let id = req.params.id
        console.log(req.body)
        series.findByIdAndUpdate(id, {$push: req.body},(err, series) =>{
            if(!err){
                res.status(201).send(`season added successfully`)
            }else{
                res.status(400).send({message: `${err.message} Wrong serial id!.`})
            }
        })
    }
    // Read - Series object reading
    static listSeries = (req, res) => {
        series.find((err, series) => {
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
            .exec((err, series) => {
                if (!err) {
                    res.status(200).json(series)
                } else {
                    res.status(400).send({ message: `${err.message} ID not found!.` })
                }
            })
    }
    // Update - updating series object
    static updatingSeriesId = (req, res) => {
        let id = req.params.id
        series.findByIdAndUpdate(id,{$set: req.body},(err)=>{
            if (!err) {
                res.status(200).send(`series updated successfully`)
            }else{
                res.status(400).send({ message: `${err.message} ID not found!.`})
            }
        })
    }
}

export default serieController;