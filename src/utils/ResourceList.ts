import { PaginationOptions } from "./interfaces";

class ResourceList {
  private query: any;
  private paginationOptions: PaginationOptions | undefined;
  private currentPage: number;

  constructor(query: any, paginationOptions?: PaginationOptions) {
    this.query = query;
    this.paginationOptions = paginationOptions;
    this.currentPage = paginationOptions?.page ?? 1;
  }

  public getQuery(): any {
    return this.query;
  }

  public getCurrentPage(): number {
    return this.currentPage;
  }

  public sortData() {
    let sortBy =
      this.paginationOptions?.sort?.split(",").join(" ") ?? "-createdAt";
    this.query.sort(sortBy);
    return this;
  }

  public limitedData() {
    this.query.limit(this.paginationOptions?.limit ?? 10);
    return this;
  }

  public pagination() {
    let page = this.paginationOptions?.page || 1;
    let limit = this.paginationOptions?.limit || 10;
    let skip = (page - 1) * limit;
    this.query.skip(skip);
    return this;
  }
}

export default ResourceList;
