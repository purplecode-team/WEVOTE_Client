import axios from 'axios';
import { useState, useEffect } from 'react';

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
        const response = await axios.get(url);
        setData(response.data); // 데이터는 response.data 안에 들어있습니다.
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
