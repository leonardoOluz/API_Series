import series from "../models/Serie.js";

class serieController {
    // Create - Criando objeto Serie
    static registerSeries = (req, res) =>{
        let serie = new series(req.body)
        serie.save((err)=>{
            if(!err){
                res.status(201).send('Series registered successfully!');
            }else{
                res.status(400).send({message: `${err.message} 'Erro ao cadastrar serie!.`});
            }
        })    
    }
    // Read - Leitura do objeto Series
    static listSeries = (req, res) => {
        series.find((err, series) => {
            if (!err) {
                res.status(200).json(series);
            }else{
                res.status(500).send({message: `${err.message} Erro!`})
            }
        })
    }
    static listSeriesId = (req, res) => {
        let id = req.params.id
        series.findById(id)
         .exec((err,series) => {
            if (!err) {
                res.status(200).json(series)
            }else{
                res.status(400).send({message: `${err.message} Id não localizado!.`})
            }
         })
    }
    
}

export default serieController;