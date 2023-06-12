import { NextFunction, Request, Response } from 'express';
export declare class ErrorHandler {
    static catchErrors(fn: any): (req: Request, res: Response, next: NextFunction) => void;
    static handleErrors(err: any, req: Request, res: Response, next: NextFunction): Response<null, Record<string, any>> | Response<{}, Record<string, any>>;
    static formatErrors(err: any): {};
}
