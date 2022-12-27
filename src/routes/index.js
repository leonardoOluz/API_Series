import series from "./seriesRoutes.js";
import express from 'express';

const routes = (app) => {
    app.route('/').get((req, res)=>{
        res.status(200).send({titulo:`The world of series`})
    })
    app.use(
        express.json(),
        series,
    )
}

export default routes;