import instanceBaseUrl from "../config/interceptor";
const UseDeletemethod = ({ url, id }) => {
  const URL = id ? `${url}/${id}` : url;
  const response = instanceBaseUrl.delete(URL);
  return response;
};

export { UseDeletemethod };
