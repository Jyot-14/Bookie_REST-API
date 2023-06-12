import { Request, Response } from 'express';
export declare class BooksController {
    get(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getBook(req: Request, res: Response): Promise<Response>;
    create(req: Request, res: Response): Promise<Response>;
    update(req: Request, res: Response): Promise<Response>;
    delete(req: Request, res: Response): Promise<Response>;
}
