import { Dispatch, SetStateAction, useEffect, useState } from 'react';

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

function useFetch(props: fetchProps):ReturnTypes{
  const {initialUrl, initialData} = props;
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
  }, [url]);

  return [{ loading, data, error }, fetchData];
};

export default useFetch;
