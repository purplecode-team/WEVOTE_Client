import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CarouselSection from '../components/Pledge/Slide/CarouselSection';
import PledgeSection from '../components/Pledge/Pledge/PledgeSection';
import CommentSection from '../components/Pledge/Comment/CommentSection';
import PledgeData from '../api/PledgeData.json';

type MatchParams = {
  id: string;
};

const Pledge = ({ match }: RouteComponentProps<MatchParams>) => {
  // api 호출
  // const {loading, data, error} = useFetch('http://localhost:8001/api/v1/promise/promise-detail');
  const data = PledgeData[0];
  const teamArray = data.Teams;
  return (
    <>
      <CarouselSection title={data.organizationName} teamArray={teamArray} />
      <PledgeSection />
      <CommentSection />
    </>
  );
};

export default Pledge;
