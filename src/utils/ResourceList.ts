import { PaginationOptions, ProjectionOptions } from "./interfaces";

class ResourceList {
  private query: any;
  private paginationOptions: PaginationOptions | undefined;
  private currentPage: number;
  private projectionOptions: ProjectionOptions | undefined

  constructor(query: any, paginationOptions?: PaginationOptions, projectionOptions?: ProjectionOptions) {
    this.query = query;
    this.paginationOptions = paginationOptions;
    this.currentPage = paginationOptions?.page ?? 1;
    this.projectionOptions = projectionOptions;
  }

  public getQuery(): any {
    return this.query;
  }

  public getCurrentPage(): number {
    return this.currentPage;
  }


  public projections() {
    if (this.projectionOptions) {
      this.query.select(this.projectionOptions)
    } else {
      this.query.select('-__v')
    }
    return this
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
