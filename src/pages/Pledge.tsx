import * as React from 'react';

import { Promise, qnaInfo, Team } from '../types/candidateType';
import { useEffect, useState } from 'react';

import CandidateSection from '../components/Pledge/Candidate/CandidateSection';
import CommentSection from '../components/Pledge/Comment/CommentSection';
import Loader from '../components/Common/Loader';
import PledgeSection from '../components/Pledge/Pledge/PledgeSection';
import { RouteComponentProps } from 'react-router-dom';
import useFetch from '../lib/hooks/useFetch';

type MatchParams = {
  id: string;
};

const initialData = {
    id: 0,
    organizationName: "미등록",
    Teams: [
      {
        id: 1,
        categoryName: "미등록",
        categoryDetail: "미등록",
        majorName: "미등록",
        order: 1,
        slogan: "미등록",
        centralId: 1,
        collegeId: 1,
        majorId: 1,
        Runners: [{
          id: 1,
          name: "미등록",
          major: "미등록",
          studentNum: 11111111,
          position: "미등록",
          picture: "미등록",
          teamId: 1
        },
        {
          id: 2,
          name: "미등록",
          major: "미등록",
          studentNum: 22222222,
          position: "미등록",
          picture: "미등록",
          teamId: 1
        }
      ],
        Promises: [
          {
            id: 1,
            promiseType: "미등록",
            promiseTitle: "미등록",
            promiseDetail: "미등록"
          }
        ],
        Qnas: [{
          id: 2,
          type: "question",
          comment: "미등록",
          time: 1618239463
        },
        {
          id: 2,
          type: "answer",
          comment: "미등록",
          time: 1618239464
        },
      ]
      }
    ]
};

const Pledge = ({ match }: RouteComponentProps<MatchParams>) => {
  const [{loading, data, error}, setUrl] = useFetch({
    initialUrl: `/api/v1/promise/promise-detail/${match.params.id}`,
    initialData: initialData,
  })
  const [current, setCurrent] = useState(0);
  const [teamArr, setTeamArr] = useState<Team[]>(initialData.Teams);
  const [pledgeArr, setPledgeArr] = useState<Promise[]>(initialData.Teams[0].Promises);
  const [slogan, setSlogan] = useState<string>(initialData.Teams[0].slogan);
  const [Qnas, setQnas] = useState<qnaInfo[]>(initialData.Teams[0].Qnas);

  useEffect(()=>{
    setTeamArr(data.Teams);
    setPledgeArr(data.Teams[current].Promises)
    setSlogan(data.Teams[current].slogan);
    setQnas(data.Teams[current].Qnas);
  },[data, current])

  return (
    <>
      {loading ? (
        <Loader margin={100}/>
      ) : (
      <>
        <CandidateSection
          title={data.organizationName}
          teamArr={teamArr}
          current={current}
          setCurrent={setCurrent}
        />
        <PledgeSection pledgeArr={pledgeArr} slogan={slogan} />
        <CommentSection teamId={teamArr[current].id} qnaArr={Qnas} />
      </>
      )}
    </>
  );
};

export default Pledge;
