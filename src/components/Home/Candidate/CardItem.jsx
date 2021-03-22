import React from 'react';
import styled from 'styled-components';
import theme from '../../../lib/styles/theme';

const CardInnerBlock = ({ data, type }) => {
  const role = type ? '정' : '부';
  return (
    <Block>
      <Profile src={data.url} alt="profile" />
      <RoleText>{role}학생회장 후보</RoleText>
      <NameText>
        <p>{data.name}</p>
      </NameText>
      <MajorText>{data.major}</MajorText>
      <StudentNumberText>{data.studentNumber}학번</StudentNumberText>
    </Block>
  );
};

const Block = styled.div`
  display: inline-block;
  width: 160px;
`;

const Profile = styled.img`
  width: 70%;
  display: block;
  border-radius: 8px;
  margin: 0 auto;
`;

const RoleText = styled.p`
  font-size: 1.3rem;
  color: ${theme.darkBlue};
  text-align: center;
  margin: 15px auto;
`;

const NameText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 30px;
  background: ${theme.Blue};
  border-radius: 20px;
  margin: 18px auto;
  p {
    font-size: 1.4rem;
    font-weight: bold;
    color: white;
    text-align: center;
  }
`;

const MajorText = styled.p`
  font-size: 1.2rem;
  color: ${theme.darkBlue};
  text-align: center;
`;

const StudentNumberText = styled.p`
  font-size: 1.2rem;
  color: ${theme.darkBlue};
  text-align: center;
  margin: 10px auto;
`;

export default CardInnerBlock;
