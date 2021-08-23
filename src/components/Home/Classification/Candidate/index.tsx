import * as React from 'react';

import { createStyles, makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';

import CardList from './CardList';
import Carousel from '../../../Common/Carousel';
import Img1 from '../../../../../public/img/CardImg1.svg';
import Img2 from '../../../../../public/img/CardImg2.svg';
import Img3 from '../../../../../public/img/CardImg3.svg';
import Skeleton from '@material-ui/lab/Skeleton';
import { Team } from '../../../../types/candidateType';
import media from '../../../../lib/styles/media';
import styled from 'styled-components';
import { theme } from '../../../Admin/style';

type CandidateArticleProps = {
  organizationId?: number,
  loading: boolean,
  title: string,
  teamArr: Team[],
  refetch?: () => void;
};

const emptyCardArr = [Img1, Img2, Img3];
const emptyDescription = '후보가 등록되어 있지 않습니다.';

export default function CandidateArticle (props: CandidateArticleProps) {
  const { loading, title, teamArr, organizationId, refetch } = props;
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const isEmptyTeamArr = 
    typeof teamArr === 'undefined' ||
    teamArr === null ||
    teamArr.length === 0;
  
  useEffect(()=>{
    setCount(0);
    return ()=>setCount(0);
  },[teamArr])

  return (
    <Article>
      {loading 
      ? <Skeleton animation="wave" variant="rect" className={classes.title}/>
      : <CandidateTitle>{title} 후보</CandidateTitle>
      }
      <CarouselWrapper>
        <Carousel 
          isLineBreak
          count={count}
          setCount={setCount}
          maxCount={teamArr.length}
        >
          {loading ?
          (<>
            <Skeleton animation="wave" variant="rect" className={classes.card}/>
            <Skeleton animation="wave" variant="rect" className={classes.card}/>
            <Skeleton animation="wave" variant="rect" className={classes.card}/>
          </>)
          :
          (isEmptyTeamArr
            ? <CardList dataArr={emptyCardArr} alt={'empty card'} description={emptyDescription}/>
            : <CardList isLink refetch={refetch} dataArr={teamArr} title={title} organizationId={organizationId} alt={'team card'} />
          )
          }
        </Carousel>
      </CarouselWrapper>
    </Article>
  );
};

const useStyles = makeStyles(() => (
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
  },
  card: {
    borderRadius: '25px',
    overflow: 'hidden',
    boxSizing: 'border-box',
    padding: '20px',
    position: 'relative',
    minWidth: '80vw',
    maxWidth: '80vw',
    height: '406px',
    margin: '20px 5vw 20px 2.5vw',
    [theme.breakpoints.up('mobile')] : {
      minWidth: '360px',
      margin: '20px 30px',
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

