import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { Paginator } from '../../database/Paginator';
import { ResponseUtil } from '../../utils/Response';
import { validateOrReject } from 'class-validator';
import { Book } from '../../database/entities/Book';
import { CreateBookDTO, UpdateBookDTO } from '../dtos/BookDTO';
import { ImageUtil } from '../../utils/ImageUtil';

export class BooksController {
  async get(req: Request, res: Response) {
    const builder = AppDataSource.getRepository(Book)
      .createQueryBuilder('book')
      .leftJoinAndSelect('book.author', 'author')
      .orderBy('book.id', 'DESC');
    const { records: books, paginationInfo } = await Paginator.paginate(
      builder,
      req
    );
    const bookData = books.map((book: Book) => {
      return book.toPayload();
    });

    return ResponseUtil.sendResponse(
      res,
      'Fatched books successfully',
      bookData,
      paginationInfo
    );
  }

  async getBook(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const book = await AppDataSource.getRepository(Book).findOneByOrFail({
      id: Number(id),
    });
    book.image = ImageUtil.prepareUrl('books', book.image);

    return ResponseUtil.sendResponse<Partial<Book>>(
      res,
      'Fatch books successfully',
      book.toPayload()
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const bookData = req.body;
    bookData.image = req.file?.filename;

    const dto = new CreateBookDTO();
    Object.assign(dto, bookData);
    dto.price = parseInt(bookData.price);
    dto.authorId = parseInt(bookData.authorId);

    await validateOrReject(dto);

    const repo = AppDataSource.getRepository(Book);
    const book = repo.create(bookData);
    await repo.save(book);

    return ResponseUtil.sendResponse(
      res,
      'Successfully created new book',
      book,
      null
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const bookData = req.body;

    const dto = new UpdateBookDTO();
    Object.assign(dto, bookData);
    dto.id = parseInt(id);

    await validateOrReject(dto);

    const repo = AppDataSource.getRepository(Book);

    const book = await repo.findOneByOrFail({
      id: Number(id),
    });

    repo.merge(book, bookData);
    await repo.save(book);
    return ResponseUtil.sendResponse(
      res,
      'Susseccfully updates the book',
      book.toPayload()
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const repo = AppDataSource.getRepository(Book);
    const book = await repo.findOneByOrFail({
      id: Number(id),
    });
    await repo.remove(book);
    return ResponseUtil.sendResponse(
      res,
      'Successfully deleted the book',
      null
    );
  }
}
