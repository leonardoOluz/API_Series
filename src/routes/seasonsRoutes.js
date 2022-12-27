import serieController from "../controllers/seasonsController.js";
import express from 'express';

const router = express.Router();

router
  .get('/seasons', serieController.listSeasons)
  .get('/seasons/:id', serieController.listSeasonsId)
  .post('/seasons', serieController.registerSeasons)
  .put('/seasons/:id', serieController.updatingSeasonsId)
  .delete('/seasons/:id', serieController.deleteObjectSeasonsById)

export default router;
