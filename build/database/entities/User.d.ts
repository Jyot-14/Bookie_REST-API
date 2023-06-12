export declare class User {
    id: string;
    name: string;
    password: string;
    email: string;
    role: number;
    hashPassword(): Promise<void>;
    createdAt: Date;
    updatedAt: Date;
    toResponse(): Partial<User>;
}
