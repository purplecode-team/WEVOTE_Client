import * as React from 'react';

import { Promise, qnaInfo, Team } from '../types/candidateType';
import { useEffect, useRef, useState } from 'react';

import CandidateSection from '../components/Pledge/Candidate/CandidateSection';
import CommentSection from '../components/Pledge/Comment/CommentSection';
import Loader from '../components/Common/Loader';
import PledgeSection from '../components/Pledge/Pledge/PledgeSection';
import useFetch from '../lib/hooks/useFetch';
import { useParams } from 'react-router-dom';

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

const Pledge = () => {
  const { id } = useParams<{id:string}>();
  const [{loading, data, error}, fetchData] = useFetch({
    initialUrl: `/api/v1/promise/promise-detail/${id}`,
    initialData: initialData,
  })
  const [current, setCurrent] = useState(0);
  const [teamArr, setTeamArr] = useState<Team[]>(initialData.Teams);
  const [pledgeArr, setPledgeArr] = useState<Promise[]>(initialData.Teams[0].Promises);
  const [slogan, setSlogan] = useState<string>(initialData.Teams[0].slogan);
  const [Qnas, setQnas] = useState<qnaInfo[]>(initialData.Teams[0].Qnas);
  const pledgePageRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    setTeamArr(data.Teams);
    setPledgeArr(data.Teams[current].Promises)
    setSlogan(data.Teams[current].slogan);
    setQnas(data.Teams[current].Qnas);
    return () => {
      setTeamArr(initialData.Teams);
      setPledgeArr(initialData.Teams[0].Promises)
      setSlogan(initialData.Teams[0].slogan);
      setQnas(initialData.Teams[0].Qnas);
    }
  },[data, current])

  useEffect(()=>{
    if (pledgePageRef.current === null) return
    window.scrollTo({top:0, left:pledgePageRef.current.scrollTop, behavior:'auto'})
    return () => window.scrollTo(0, 0)
  })

  return (
    <>
      {loading ? (
        <Loader margin={100}/>
      ) : (
      <div ref={pledgePageRef}>
        <CandidateSection
          title={data.organizationName}
          teamArr={teamArr}
          current={current}
          setCurrent={setCurrent}
        />
        <PledgeSection pledgeArr={pledgeArr} slogan={slogan} />
        <CommentSection teamId={teamArr[current].id} qnaArr={Qnas} fetchData={fetchData}/>
      </div>
      )}
    </>
  );
};

export default Pledge;
