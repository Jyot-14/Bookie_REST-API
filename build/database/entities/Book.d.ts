import { Author } from './Author';
export declare class Book {
    id: number;
    title: string;
    description: string;
    author: Author;
    authorId: number;
    price: number;
    category: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    toPayload(): Partial<Book>;
}
