import { useEffect, useState } from 'react';

import client from '../api/client';

type fetchProps = {
  url: string;
};

const useFetch = ({ url }: fetchProps) => {
  const [loading, setLoading] = useState(true);
  const [fetchData, setFetchData] = useState(null);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    await client.get(url)
    .then(response => {
      setFetchData(response.data)
    })
    .catch(e => setError(e))
    .then( () => {setLoading(false)});
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { loading, fetchData, error };
};

export default useFetch;
