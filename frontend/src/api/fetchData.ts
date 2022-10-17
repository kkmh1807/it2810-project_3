export async function getRequest<T>(url: string) {
  const response = await fetch(url);

  if (!response.ok) throw new Error(response.statusText);

  const json = await response.json();
  return json.data as T;
}
