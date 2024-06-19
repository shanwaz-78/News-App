import { useState, useEffect } from "react";

function useCustomHook(url) {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("URL is not valid");
        }
        const data = await response.json();
        setNews(data.articles);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { news, isLoading, error };
}

export default useCustomHook;
