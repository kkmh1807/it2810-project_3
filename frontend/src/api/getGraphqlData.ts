import { GraphQLResponse } from '../types';

const API_URL = 'http://localhost:4000/api';

export default async function getGraphqlData<T>(query: string, variables?: Record<string, unknown>, operationName?: string) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query,
      variables,
      operationName
    })
  });

  if (!response.ok) throw new Error(response.statusText);

  const json: GraphQLResponse<T> = await response.json();

  if (json.errors) throw new Error('Query returned with errors', { cause: json.errors });

  return json.data as T;
}
