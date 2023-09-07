import { useEffect, useState } from "react";
import { api } from "../lib/api";
import Cookie from "js-cookie";

export function useFetch<Type = unknown>(url: string) {
  const [data, setData] = useState<Type | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    const token = Cookie.get("authToken");
    api
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { result } = response.data;
        setData(result);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsFetching(false));
  }, []);
  return { data, isFetching };
}
