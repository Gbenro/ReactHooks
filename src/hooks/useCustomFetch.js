import { useState, useEffect } from "react";

function useCustomFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function customFetch(url) {
    try {
      let res = await fetch(url);
      let rData = await res.json();
      setData(rData);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (url) {
        customFetch(url);
      }
    }, 3000);
  }, [url]);

  return [data, loading, error];
}

export default useCustomFetch;
