import axios from "axios";
const UsePostmethod = ({ url, id, data }) => {
  const URL = id ? `${url}/${id}` : url;
  const response = axios.post(URL, data);
  return response;
};

export { UsePostmethod };
