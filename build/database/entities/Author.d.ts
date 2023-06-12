import { Book } from './Book';
export declare class Author {
    id: number;
    name: string;
    email: string;
    bio: string;
    image: string;
    books: Book[];
    createdAt: Date;
    updatedAt: Date;
    toPayload(): Author;
}
