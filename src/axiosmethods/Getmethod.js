import React, { useEffect } from "react";
import instanceBaseUrl from "../config/interceptor";

function Getmethod({ url, id }) {
  const [response, setResponse] = useState([]);
  const GetResponse = async () => {
    const URL = id ? `${url}/${id}` : url;
    try {
      const responsedata = await instanceBaseUrl.get(URL);
      if (responsedata) {
        setResponse(responsedata);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    GetResponse();
  }, []);
  return { response };
}

export default Getmethod;
