import React from 'react';
import styled from 'styled-components';
import ClassificationSection from '../components/Home/Category/ClassificationSection';
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
      {/* <Search /> */}
      <ClassificationSection />
    </>
  );
};

const Div = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h2`
  font-size: 3rem;
`;

export default Home;
