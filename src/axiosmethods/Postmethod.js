import React, { useEffect } from "react";
import instanceBaseUrl from "../config/interceptor";

function Postmethod({ url, id, data }) {
  const [response, setResponse] = useState([]);
  const PostResponse = async () => {
    const URL = id ? `${url}/${id}` : url;
    try {
      const responsedata = await instanceBaseUrl.post(URL, data);
      if (responsedata) {
        setResponse(responsedata);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    PostResponse();
  }, []);
  return { response };
}

export default Postmethod;
