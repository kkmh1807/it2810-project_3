export async function postRequest<T>(url: string, mutationQuery: string) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: mutationQuery
    })
  });

  if (!response.ok) throw new Error(response.statusText);

  const json = await response.json();
  return json.data as T;
}
