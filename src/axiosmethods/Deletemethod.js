import React, { useEffect } from "react";
import instanceBaseUrl from "../config/interceptor";

function Deletemethod({ url, id, data }) {
  const [response, setResponse] = useState([]);
  const DeleteResponse = async () => {
    const URL = id ? `${url}/${id}` : url;
    try {
      const responsedata = await instanceBaseUrl.delete(URL);
      if (responsedata) {
        setResponse(responsedata);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    DeleteResponse();
  }, []);
  return { response };
}

export default Deletemethod;
