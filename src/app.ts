import express, { Request, Response } from "express"
import { appConfig } from "./utils/appConfig";
import cors from "cors"
import catchAll from "./middleware/catchAll";
import { servicesController } from "./controllers/servicesControllers";

const server = express();

// allow cors
server.use(cors());

// load body
server.use(express.json());

// register controllers
server.use(servicesController)

// catch-all
server.use(catchAll)

// run server
server.listen(appConfig.port, ()=>{console.log(`Listening on http://localhost:${appConfig.port}`);
})