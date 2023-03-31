import {Request, Response} from "express";
import {JWT, TokenService} from "../application/token-service";
import {QueryService} from "../services/query-service";
import {SessionService} from "../services/session-service";

export class SecurityController {
    static async getAllDevices(req: Request, res: Response) {
        try {
            const tokenService = new TokenService();
            const queryService = new QueryService();
            const sessionService = new SessionService();

            const {refreshToken} = req.cookies;
            if (!refreshToken) throw new Error;
            const isBlockedToken = await tokenService.checkTokenByBlackList(refreshToken);
            if (isBlockedToken) throw new Error;
            const payload = await tokenService.getPayloadByRefreshToken(refreshToken) as JWT;
            if (!payload) throw new Error;
            const user = await queryService.findUserByEmail(payload.email);
            if (user) {
                const sessions = await sessionService.getAllSessionByUser(String(user._id))
                res.status(200).json(sessions)
            }
        } catch (error) {
            if (error instanceof Error) {
                res.sendStatus(401);
                console.log(error.message);
            }
        }
    }

    static async terminateDevicesSession(req: Request, res: Response) {
        try {
            const tokenService = new TokenService();
            const queryService = new QueryService();

            const {refreshToken} = req.cookies;
            if (!refreshToken) throw new Error;
            const isBlockedToken = await tokenService.checkTokenByBlackList(refreshToken);
            if (isBlockedToken) throw new Error;
            const payload = await tokenService.getPayloadByRefreshToken(refreshToken) as JWT;
            if (!payload) throw new Error;
            const user = await queryService.findUserByEmail(payload.email);
            if (user) {

            }

        } catch (error) {
            if (error instanceof Error) {
                res.sendStatus(404);
                console.log(error.message);
            }
        }
    }

    static async terminateTheDeviceSession(req: Request, res: Response) {
        try {
            const tokenService = new TokenService();
            const queryService = new QueryService();

            const{deviceId} = req.params;
            const {refreshToken} = req.cookies;
            if (!refreshToken) throw new Error;
            const isBlockedToken = await tokenService.checkTokenByBlackList(refreshToken);
            if (isBlockedToken) throw new Error;
            const payload = await tokenService.getPayloadByRefreshToken(refreshToken) as JWT;
            if (!payload) throw new Error;
            const user = await queryService.findUserByEmail(payload.email);
            if (user) {

            }


        } catch (error) {
            if (error instanceof Error) {
                res.sendStatus(404);
                console.log(error.message);
            }
        }
    }
}