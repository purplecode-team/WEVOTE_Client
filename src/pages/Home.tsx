import * as React from 'react';
import { useState } from 'react';
import client from '../api/client';
import HomeBoard from '../components/Home/HomeBoard';
import Classification from '../components/Home/Classification';
import { useEffect } from 'react';

const Home = () => {
  const [searchData, setSearchData] = useState([]);

  useEffect(()=>{
    client.get('/api/v1/main/search')
      .then(response => {
        setSearchData(response.data);
      })
      .catch(e => console.log(e));
  },[])

  return (
    <>
      <HomeBoard />
      <Classification />
    </>
  );
};

export default Home;