import seasons from "../models/Season.js";

class SeasonsController {
    // Create - seasons object
    static registerSeasons = (req, res) => {
        let Seasons = new seasons(req.body)
        Seasons.save((err) => {
            if (!err) {
                res.status(201).send('Seasons registered successfully!');
            } else {
                res.status(400).send({ message: `${err.message} 'Error registering seasons!.` });
            }
        })
    }
    // Read - seasons object
    static listSeasons = (req, res) => {
        seasons.find((err, seasons) => {
            if (!err) {
                res.status(200).json(seasons);
            } else {
                res.status(500).send({ message: `${err.message} Erro!` })
            }
        })
    }
    static listSeasonsId = (req, res) => {
        let id = req.params.id
        seasons.findById(id)
            .exec((err, seasons) => {
                if (!err) {
                    res.status(200).json(seasons)
                } else {
                    res.status(400).send({ message: `${err.message} ID not found!.` })
                }
            })
    }
    // Update - seasons object
    static updatingSeasonsId = (req, res) => {
        let id = req.params.id
        seasons.findByIdAndUpdate(id,{$set: req.body},(err)=>{
            if (!err) {
                res.status(200).send(`seasons updated successfully`)
            }else{
                res.status(400).send({ message: `${err.message} ID not found!.`})
            }
        })
    }
    // Delete - seasons object
    static deleteObjectSeasonsById = (req, res) => {
        let id = req.params.id
        seasons.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send(`Seasons deleted successfully`)
            } else {
                res.status(400).send({message: `${err.message} check serial id!.`})
            }
        })
    }    
}

export default SeasonsController;

