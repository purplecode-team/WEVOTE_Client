import * as React from 'react';

import CardList from './CardList';
import Carousel from '../../../Common/Carousel';
import Img1 from '../../../../../public/img/CardImg1.svg';
import Img2 from '../../../../../public/img/CardImg2.svg';
import Img3 from '../../../../../public/img/CardImg3.svg';
import media from '../../../../lib/styles/media';
import styled from 'styled-components';
import { Team } from '../../../../types/candidateType';
import { useState } from 'react';

type CandidateArticleProps = {
  title: string;
  teamArr: Team[];
};

const emptyCardArr = [Img1, Img2, Img3];
const emptyDescription = '후보가 등록되어 있지 않습니다.';

const CandidateArticle = ({ title, teamArr }: CandidateArticleProps) => {
  const [locationX, setLocationX] = useState(0);
  const [count, setCount] = useState(0);

  const isEmptyTeamArr = 
    typeof teamArr === 'undefined' ||
    teamArr === null ||
    teamArr.length === 0;
  
  return (
    <Article>
      <CandidateTitle>{title} 후보</CandidateTitle>
      <CarouselWrapper>
        <Carousel 
          isLineBreak
          locationX={locationX}
          setLocationX={setLocationX}
          count={count}
          setCount={setCount}
          maxCount={teamArr.length}
        >
          {isEmptyTeamArr
            ? <CardList dataArr={emptyCardArr} alt={'empty card'} description={emptyDescription}/>
            : <CardList isLink dataArr={teamArr} alt={'team card'} />
          }
        </Carousel>
      </CarouselWrapper>
    </Article>
  );
};

const CandidateTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  margin: 20px 0px 40px 20px;
  @media (max-width: ${media.mobileL}px) {
    font-size: 1.6rem;
  }
`;

const Article = styled.article`
  max-width: 100%;
  width: ${media.laptop}px;
  margin: 0 auto;
  padding: 30px 0;
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
    min-width: 320px;
  }
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
`;

export default CandidateArticle;
