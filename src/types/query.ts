interface IQuery {
  data?: any;
  transaction?: any;
  attributes?: any;
  include?: any;
  where?: any;
  order?: any[];
  group?: any[];
  limit?: number;
  offset?: number;
  raw?: boolean;
  distinct?: boolean;
  subQuery?: boolean;
  defaults?: any;
}
export { IQuery };
