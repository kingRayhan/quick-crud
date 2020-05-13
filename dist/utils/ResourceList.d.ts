import { PaginationOptions } from "./interfaces";
declare class ResourceList {
    private query;
    private paginationOptions;
    private currentPage;
    constructor(query: any, paginationOptions?: PaginationOptions);
    getQuery(): any;
    getCurrentPage(): number;
    sortData(): this;
    limitedData(): this;
    pagination(): this;
}
export default ResourceList;
