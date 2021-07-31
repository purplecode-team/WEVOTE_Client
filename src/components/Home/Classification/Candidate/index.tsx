import * as React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core';

import CardList from './CardList';
import Carousel from '../../../Common/Carousel';
import Img1 from '../../../../../public/img/CardImg1.svg';
import Img2 from '../../../../../public/img/CardImg2.svg';
import Img3 from '../../../../../public/img/CardImg3.svg';
import media from '../../../../lib/styles/media';
import Skeleton from '@material-ui/lab/Skeleton';
import styled from 'styled-components';
import { Team } from '../../../../types/candidateType';
import { useState } from 'react';

type CandidateArticleProps = {
  organizationId?: number,
  loading: boolean,
  title: string,
  teamArr: Team[],
};

const emptyCardArr = [Img1, Img2, Img3];
const emptyDescription = '후보가 등록되어 있지 않습니다.';

const CandidateArticle = ({ loading, title, teamArr, organizationId }: CandidateArticleProps) => {
  const classes = useStyles();
  const [locationX, setLocationX] = useState(0);
  const [count, setCount] = useState(0);

  const isEmptyTeamArr = 
    typeof teamArr === 'undefined' ||
    teamArr === null ||
    teamArr.length === 0;
  
  return (
    <Article>
      {loading 
      ? <Skeleton animation="wave" variant="rect" className={classes.title}/>
      : <CandidateTitle>{title} 후보</CandidateTitle>
      }
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
            ? <CardList loading={loading} dataArr={emptyCardArr} alt={'empty card'} description={emptyDescription}/>
            : <CardList isLink dataArr={teamArr} organizationId={organizationId} alt={'team card'} />
          }
        </Carousel>
      </CarouselWrapper>
    </Article>
  );
};

const useStyles = makeStyles((theme: Theme) => (
  createStyles({
  title:{
    width: '80px',
    height: '30px',
    borderRadius: '20px',
    margin: '20px 0px 40px 20px',
    [theme.breakpoints.up('mobile')] : {
      width: '100px',
      height: '40px',
    }
  }
})));

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
