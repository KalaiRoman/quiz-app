import React, { useEffect } from "react";
import instanceBaseUrl from "../config/interceptor";

function Patchmethod({ url, id, data }) {
  const [response, setResponse] = useState([]);
  const PatchResponse = async () => {
    const URL = id ? `${url}/${id}` : url;
    try {
      const responsedata = await instanceBaseUrl.patch(URL, data);
      if (responsedata) {
        setResponse(responsedata);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    PatchResponse();
  }, []);
  return { response };
}

export default Patchmethod;
