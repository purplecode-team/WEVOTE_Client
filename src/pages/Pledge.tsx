import * as React from 'react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CarouselSection from '../components/Pledge/Carousel/CarouselSection';
import PledgeSection from '../components/Pledge/Pledge/PledgeSection';
import CommentSection from '../components/Pledge/Comment/CommentSection';
import PledgeData from '../api/PledgeData.json';

type MatchParams = {
  id: string;
};

const Pledge = ({ match }: RouteComponentProps<MatchParams>) => {
  // api 호출
  // const {loading, data, error} = useFetch('http://localhost:8001/api/v1/promise/promise-detail');
  const [current, setCurrent] = useState(1);
  const data = PledgeData[0];
  const teamArray = data.Teams;
  const pledgeArray = data.Teams[current - 1].Promises;
  const { slogan } = data.Teams[current - 1];

  const handleCurrent = (id) => {
    setCurrent(id);
  };

  return (
    <>
      <CarouselSection
        title={data.organizationName}
        teamArray={teamArray}
        current={current}
        handleCurrent={handleCurrent}
      />
      <PledgeSection pledgeArray={pledgeArray} slogan={slogan} />
      <CommentSection />
    </>
  );
};

export default Pledge;
