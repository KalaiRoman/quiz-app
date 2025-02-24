import instanceBaseUrl from "../config/interceptor";

function UsePatchmethod(url, data, id) {
  const URL = id ? `${url}/${id}` : url;
  const response = instanceBaseUrl.patch(URL, data);
  return response;
}

export { UsePatchmethod };
