/// <reference types="qs" />
/// <reference types="express" />
export declare class FileUploader {
    static upload(fileFieldName: string, folderName: string, fileSize: number, fileTypes?: string[]): import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
}
