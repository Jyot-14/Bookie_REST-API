interface PaginationInfo {
    currentPage: number;
    pageSize: number;
    totalIteams: number;
    pages: number;
    hasNext: boolean;
    hasPrevious: boolean;
}
export declare class Paginator {
    static paginate(queryBuilder: any, req: any): Promise<{
        records: any;
        paginationInfo: PaginationInfo;
    }>;
}
export {};
