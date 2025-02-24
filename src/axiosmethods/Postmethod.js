import instanceBaseUrl from "../config/interceptor";
const UsePostmethod = (url, data, id) => {
  const URL = id ? `${url}/${id}` : url;
  const response = instanceBaseUrl.post(URL, data);
  return response;
};

export { UsePostmethod };
