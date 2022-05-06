import { PaginationOptions, ProjectionOptions } from "./interfaces";
declare class ResourceList {
    private query;
    private paginationOptions;
    private currentPage;
    constructor(query: any, paginationOptions?: PaginationOptions, projectionOptions?: ProjectionOptions);
    getQuery(): any;
    getCurrentPage(): number;
    projections(): void;
    sortData(): this;
    limitedData(): this;
    pagination(): this;
}
export default ResourceList;
