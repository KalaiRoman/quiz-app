import instanceBaseUrl from "../config/interceptor";
const UseGetmethod = (url, id) => {
  const URL = id ? `${url}/${id}` : url;
  const response = instanceBaseUrl.get(URL);
  return response;
};

export { UseGetmethod };
