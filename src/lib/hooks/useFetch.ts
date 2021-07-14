import { useEffect, useState } from 'react';

import client from '../api/client';

type fetchProps = {
  initialUrl: string,
  initialData?: Array<object>;
}

const useFetch = (props: fetchProps) => {
  const {initialUrl, initialData} = props;
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      await client.get(url)
      .then(response => {
        setData(response.data)
      })
      .catch(e => setError(true))
      .then(() => setLoading(false));
    };
    fetchUsers();
  }, [url]);

  return [{ loading, data, error }, setUrl];
};

export default useFetch;
