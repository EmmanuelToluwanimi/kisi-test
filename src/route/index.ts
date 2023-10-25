import { Express } from "express";
import { ROUTES } from "../utils/constants";
import ImagesRouter from "./images"


const { HEALTHCHECK, IMAGES } = ROUTES

function routes(app: Express) {
  app.get(HEALTHCHECK, (req, res) => {
    res.send("OK");
  })

  app.use(IMAGES, ImagesRouter);

}

export default routes;