import * as React from 'react';

import { useCandidateDispatch, useCandidateState } from '../../context/CandidateProvider';
import { useEffect, useState } from 'react';

import defaultImg from '../../../public/img/noimg.jpg';
import EditIcon from '@material-ui/icons/Edit';
import media from '../../lib/styles/media';
import styled from 'styled-components';
import { Team } from '../../types/candidateType';
import theme from '../../lib/styles/theme';

type TeamProps = {
  teamData: Team;
  isCurrent?: boolean;
};

const CandidateCard = ({ teamData }: TeamProps) => {
  const [isAdminPage, setAdminPage] = useState(false);
  const dispatch = useCandidateDispatch();

  const editCandidate = e => {
    e.stopPropagation();
    // delete 클릭 시, 이벤트
    dispatch({type: 'TOGGLE_EDIT_CANDIDATE', isOpenEdit: true, id: teamData.id});
  }

  const handleImgError = (e) => {
    e.target.src = defaultImg;
  }

  // admin일 경우, 상황에 따라 edit open, delete candidate 실행 함수 작성
  useEffect(()=>{
    const addressList = window.location.href.split('/')
    if (addressList[addressList.length -1] === 'admin') {
      setAdminPage(true);
    }
  },[])

  return (
    <>
      { isAdminPage && (
        <>
          <EditButton type='button' onClick={editCandidate}>
            <EditIcon fontSize={'large'} />
          </EditButton>
        </>
      )}
      <NumberBlock>기호 {teamData.order}번</NumberBlock>
      <SloganBlock>"{teamData.slogan}"</SloganBlock>
      <InnerBox>
        {teamData.Runners.map(Runner => (
          <Block key={Runner.id} >
            <ImgBlock>
              <Profile src={Runner.picture || ''} alt="profile" onError={handleImgError}/>
            </ImgBlock>
            <RoleText>{Runner.position}</RoleText>
            <NameBlock>
              <p>{Runner.name}</p>
            </NameBlock>
            <MajorText>{Runner.major}</MajorText>
            <StudentNumberText>{Runner.studentNum}학번</StudentNumberText>
          </Block>
        ))}
      </InnerBox>
    </>
  );
};

CandidateCard.defaultProps = {
  isCurrent: true,
};

const EditButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 5px;
  display: flex;
  justify-content: center;
  border-style: none;
  background: none;
  color: gray;
  font-size: 2.5rem;
  position: absolute;
  z-index: 1;
  top: 15px;
  right: 10px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    color: black;
    background: lightgray;
  }
`;

const NumberBlock = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${theme.DarkBlue};
`;

const SloganBlock = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.Blue};
  text-align: center;
  margin: 30px 0;
`;

const InnerBox = styled.div`
  display: flex;
  justify-content: space-around;
`;


const Block = styled.div`
  display: inline-block;
  width: 160px;
`;

const ImgBlock = styled.div`
  @media (max-width: ${media.mobileL}px) {
    width: 90%;
    margin: 0 auto;
    position: relative;
    &:after {
      content: '';
      display: block;
      padding-bottom: 130%;
    }
  }
`;

const Profile = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  object-fit: cover;
  @media (min-width: ${media.mobileL + 1}px) {
    width: 150px;
    height: 200px;
  }
  @media (max-width: ${media.mobileL}px) {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const RoleText = styled.p`
  font-size: 1.3rem;
  color: ${theme.DarkBlue};
  text-align: center;
  margin: 15px auto;
  @media (max-width: ${media.mobileL}px) {
    font-size: 1.1rem;
  }
`;

const NameBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  background: ${theme.Blue};
  border-radius: 20px;
  margin: 10px auto;
  p {
    font-size: 1.4rem;
    font-weight: bold;
    color: white;
    text-align: center;
  }
`;

const MajorText = styled.p`
  font-size: 1.2rem;
  color: ${theme.DarkBlue};
  text-align: center;
  font-family: 'paybooc-medium', 'sans-serif';
`;

const StudentNumberText = styled.p`
  font-size: 1.2rem;
  color: ${theme.DarkBlue};
  text-align: center;
  margin: 10px auto;
`;


export default CandidateCard;
