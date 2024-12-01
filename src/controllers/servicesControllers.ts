import express, { Request, Response, NextFunction } from "express";
import { getAllServices, updateService } from "../services/servicesService";
import { appConfig } from "../utils/appConfig";

export const servicesController = express.Router();

servicesController.get(appConfig.routePrefix + '/service', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const serivces = await getAllServices();
        res.status(200).json(serivces);
    } catch (err) {
        next(err);
    }
})

servicesController.patch(appConfig.routePrefix + '/service/status/:id', async (req: Request, res: Response, next: NextFunction) => {
    const id = +req.params.id;
    const { status } = req.body;

    console.log("Request body received:", req.body); 

    try {
        const service = await updateService(id, status);
        res.status(200).json(service);
    } catch (err) {
        console.error("Error in PATCH /service/status/:id:", err);  
        res.status(500).json({ message: "Internal Server Error" }); 
        next(err);
    }
});