import * as React from 'react';
import { useState, useEffect } from 'react';
import client from '../../api/client';

type fetchProps = {
  url: string;
};

const useFetch = (props: fetchProps) => {
  const {url} = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('initial error');

  useEffect(() => {
    console.log(url)
    const fetchUsers = async () => {
      try {
        const response = await client.get('http://34.64.235.182'+url);
        setData(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, [url]);

  return { loading, data, error };
};

export default useFetch;
