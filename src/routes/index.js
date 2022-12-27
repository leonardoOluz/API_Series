import series from "./seriesRoutes.js";
import seasons from './seasonsRoutes.js';
import express from 'express';

const routes = (app) => {
    app.route('/').get((req, res)=>{
        res.status(200).send({titulo:`The world of series`})
    })
    app.use(
        express.json(),
        series,
        seasons
    )
}

export default routes;