const api = "https://api.lokeo.ru/api/users/login";

export const useFetchUser = async (request) => {
  const response = await fetch(api, {
    method: "POST",
    body: JSON.stringify(request),
  });
  const result = await response.json();
  return result;
};
