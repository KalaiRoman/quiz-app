import React, { useEffect } from "react";
import instanceBaseUrl from "../config/interceptor";

function Putmethod({ url, id, data }) {
  const [response, setResponse] = useState([]);
  const PutResponse = async () => {
    const URL = id ? `${url}/${id}` : url;
    try {
      const responsedata = await instanceBaseUrl.put(URL, data);
      if (responsedata) {
        setResponse(responsedata);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    PutResponse();
  }, []);
  return { response };
}

export default Putmethod;
