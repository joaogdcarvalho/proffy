import express from "express";
import ClassesControllers from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";
import rateLimit from "express-rate-limit";

const routes = express.Router();
const classesControllers = new ClassesControllers();
const connectionsController = new ConnectionsController();

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 100,
});

routes.use(limiter);

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes;
