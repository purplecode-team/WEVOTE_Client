import React from 'react';
import styled from 'styled-components';
import HomeBoard from '../components/Home/HomeBoard';
// import { setConstantValue } from 'typescript';
import Classification from '../components/Home/Classification';
// import useFetch from '../api/useFetch';

const Home = () => {
  //  useFetch 적용 예제
  // const { loading, data, error } = useFetch('http://localhost:8001/api');
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  // const result = data.reduce((arr, cur) => {
  // arr.push(cur.username);
  // return arr;
  // }, []);
  // setUsers(result);
  // }, [data]);
  // console.log(users);
  return (
    <>
      <HomeBoard />
      <Classification />
    </>
  );
};

export default Home;
