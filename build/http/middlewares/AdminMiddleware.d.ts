import { NextFunction, Request, Response } from 'express';
export declare class AdminMiddleware {
    static check(req: Request, res: Response, next: NextFunction): Promise<Response<null, Record<string, any>> | undefined>;
}
