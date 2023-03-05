import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((resp) => {
          if (!resp.ok) {
            throw Error("Could not fetch Data from that resource");
          } else {
            return resp.json();
          }
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch Aborted");
          } else {
            setError(err.message);
            setLoading(false);
          }
        });
    }, 2000);
    return () => abortCont.abort();
  }, [url]);
  return [data, Loading, error];
};

export default useFetch;
