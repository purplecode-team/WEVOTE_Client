import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
// import styled from 'styled-components';
// import { setConstantValue } from 'typescript';
import ClassificationSection from '../components/Home/Category/ClassificationSection';
// import useFetch from '../api/useFetch';

type MatchParams = {
  id: string;
};

const Home = ({ match }: RouteComponentProps<MatchParams>) => {
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
      <ClassificationSection />
    </>
  );
};

export default Home;
