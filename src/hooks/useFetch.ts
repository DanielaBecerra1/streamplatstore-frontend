import { useState, useEffect } from 'react';

const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`Fetching data from ${url}`);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error fetching data');
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof SyntaxError) {
          console.error(`JSON Parse Error: ${err.message}`);
          setError('Tenemos problemas en este momento para gestionar tu solicitud, por favor intentalo más tarde.');
        } else {
          console.error(`Error fetching data: ${err instanceof Error ? err.message : 'Unknown error'}`);
          setError(err instanceof Error ? err.message : 'Unknown error');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
