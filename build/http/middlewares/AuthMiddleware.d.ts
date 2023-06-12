import { NextFunction, Request, Response } from 'express';
export declare class AuthMiddleware {
    static authenticate(req: Request, res: Response, next: NextFunction): Promise<Response<null, Record<string, any>> | undefined>;
}
