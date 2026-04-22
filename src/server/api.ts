export async function api(path: string, options?: RequestInit) {
  const url = new URL(path, process.env.NEXT_PUBLIC_API_URL!).toString();

  const res = await fetch(url, {
    method: options?.method || "GET",
    body: options?.body,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.message || "Erro na requisição");
  }

  return data;
}
