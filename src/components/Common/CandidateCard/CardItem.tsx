import * as React from 'react';

import media from '../../../lib/styles/media';
import styled from 'styled-components';
import theme from '../../../lib/styles/theme';

type CardInnerProps = {
  Runner: {
    id: number;
    name: string;
    major: string;
    studentNum: number;
    position: string;
    picture?: string;
    teamId: number;
  };
  type: boolean;
};

const CardInnerBlock = ({ Runner, type }: CardInnerProps) => {
  const role = type ? '정' : '부';
  return (
    <Block>
      <ImgBlock>
        <Profile src={Runner.picture} alt="profile" />
      </ImgBlock>
      <RoleText>{role}학생회장 후보</RoleText>
      <NameBlock>
        <p>{Runner.name}</p>
      </NameBlock>
      <MajorText>{Runner.major}</MajorText>
      <StudentNumberText>{Runner.studentNum}학번</StudentNumberText>
    </Block>
  );
};

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

export default CardInnerBlock;
