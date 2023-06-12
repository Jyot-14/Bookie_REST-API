import { Request, Response } from 'express';
export declare class AuthorsController {
    getAuthors(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getAuthor(req: Request, res: Response): Promise<Response>;
    create(req: Request, res: Response): Promise<Response>;
    update(req: Request, res: Response): Promise<Response>;
    delete(req: Request, res: Response): Promise<Response>;
}
