import {Request, Response} from "express";

export class SecurityController {
    static async getAllDevices(req: Request, res: Response) {
        try {

        } catch (error) {
            if (error instanceof Error) {
                res.sendStatus(404);
                console.log(error.message);
            }
        }
    }

    static async terminateDevicesSession(req: Request, res: Response) {
        try {

        } catch (error) {
            if (error instanceof Error) {
                res.sendStatus(404);
                console.log(error.message);
            }
        }
    }

    static async terminateTheDeviceSession(req: Request, res: Response) {
        try {

        } catch (error) {
            if (error instanceof Error) {
                res.sendStatus(404);
                console.log(error.message);
            }
        }
    }
}