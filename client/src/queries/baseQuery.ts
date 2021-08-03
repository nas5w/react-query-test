import { QueryError } from "./errors";

export const fetchWithAuth = async <T>(
  url: RequestInfo,
  opts?: RequestInit
): Promise<T> => {
  const res = await fetch(url, {
    ...opts,
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("auth_token"),
    },
  });
  if (res.status === 401) {
    throw new QueryError(res.status);
  }
  return res.json();
};
