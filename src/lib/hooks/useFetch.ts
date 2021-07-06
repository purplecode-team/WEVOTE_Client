import { useEffect, useState } from 'react';

import client from '../api/client';

type fetchProps = {
  url: string;
};

const useFetch = ({ url }: fetchProps) => {
  const [loading, setLoading] = useState(true);
  const [fetchData, setFetchData] = useState([]);
  const [error, setError] = useState('initial error');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await client.get(url);
        setFetchData(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return { loading, fetchData, error };
};

export default useFetch;
