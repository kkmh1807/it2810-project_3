// GraphQL response format according to spec: https://spec.graphql.org/June2018/#sec-Response-Format

export interface GraphQLResponse<T> {
  data: T;
  errors?: GraphQLError[];
}

export interface GraphQLError {
  message: string;
  locations: GraphQLErrorLocation[];
  path: (string | number)[];
  extensions?: {
    code: string;
    timestamp: string;
  };
}

export interface GraphQLErrorLocation {
  line: number;
  column: number;
}
