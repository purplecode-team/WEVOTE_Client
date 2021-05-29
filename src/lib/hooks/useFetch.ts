import React, { useState, useEffect } from 'react';
import client from '../../utils/api/client';

type fetchProps = {
  url: string;
};

const useFetch = ({ url }: fetchProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('initial error');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await client.get(url);
        setData(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return { loading, data, error };
};

export default useFetch;
