import { useEffect, useState } from 'react';

import client from '../api/client';

type fetchProps = {
  initialUrl: string,
  initialData?: any;
}

type stateTypes = {
  loading: boolean,
  data:  any,
  error: boolean,
}

type ReturnTypes = [stateTypes, () => void]

export default function useFetch(props: fetchProps):ReturnTypes{
  const {initialUrl, initialData} = props;
  const [url, setUrl] = useState<string>(initialUrl);
  const [data, setData] = useState<any>(initialData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    await client.get(url)
    .then(response => {
      setData(response.data)
    })
    .catch(e => setError(true))
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    return () => {
      setLoading(false);
      setData(initialData);
    }
  }, [url]);

  return [{ loading, data, error }, fetchData];
};
