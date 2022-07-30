import { useEffect, useState } from 'react';

import client from '../api/client';

type stateTypes = {
  loading: boolean;
  data: any;
  error: boolean;
};

type ReturnTypes = [stateTypes, () => void];

export default function useFetch(url: string): ReturnTypes {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    await client
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => setError(true));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    return () => {
      setLoading(false);
      setData(null);
    };
  }, [url]);

  return [{ loading, data, error }, fetchData];
}
