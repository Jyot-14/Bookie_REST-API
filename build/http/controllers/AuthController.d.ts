import { NextFunction, Request, Response } from 'express';
import { User } from '../../database/entities/User';
export declare class AuthController {
    register(req: Request, res: Response, next: NextFunction): Promise<Response>;
    login(req: Request, res: Response, next: NextFunction): Promise<Response<null, Record<string, any>> | Response<{
        user: Partial<User>;
        accessToken: string;
    }, Record<string, any>>>;
}
