import { Response } from 'express';
export declare class ResponseUtil {
    static sendResponse<T>(res: Response, message: string, data: T, paginationInfo?: any, statusCode?: number): Response<T>;
    static sendError<T>(res: Response, message: string, statusCode: number | undefined, error: T): Response<T>;
}
