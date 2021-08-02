import * as React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core';
import styled, { css } from 'styled-components';

import CandidateCard from '../../../Common/CandidateCard';
import media from '../../../../lib/styles/media';
import Skeleton from '@material-ui/lab/Skeleton';
import { Team } from '../../../../types/candidateType';
import theme from '../../../../lib/styles/theme';
import { useHistory } from "react-router-dom";

type imgTypes = {
  loading?: boolean;
  isLink?: boolean;
  dataArr: any[];
  title?: string;
  alt: string;
  description?: string;
  isCurrent?: boolean
  organizationId?: number;
}

type styleProps = {
  isCurrent?: boolean;
  mobileMargin?: number;
  MobileBoxSize?: number;
  laptopMargin?:number;
};

const BoxSize = 360;
const MobileBoxSize = 90;

const CardList = (props:imgTypes) => {
  const {loading, isLink, dataArr, title, alt, isCurrent, description, organizationId} = props;
  const history = useHistory();
  const classes = useStyles();
  
  const mobileMargin = (window.innerWidth - window.innerWidth*MobileBoxSize/100) / 2

  const routePledge = () => {
    history.push(`/pledge/${organizationId}`);
  }

  return (
    <>
      {isLink ? 
        dataArr.map((team: Team) => (
          <Box 
            key={team.id}
            isCurrent={isCurrent} 
            mobileMargin={mobileMargin} 
            MobileBoxSize={MobileBoxSize}
            onClick={routePledge}
          >
            <CandidateCard title={title} teamData={team} />
          </Box>
        ))
       : 
       dataArr.map((img,index) => (
         loading ?
            <Skeleton key={index} animation="wave" variant="rect" className={classes.card}/>
          : <Box 
           key={index}
           mobileMargin={mobileMargin}
           MobileBoxSize={MobileBoxSize}
         >
           <Img src={img} alt={alt} />
           {description && <Description>{description}</Description>}
         </Box>
       )
       )
      }
    </>
  );
};

CardList.defaultProps = {
  isLink : false,
  isCurrent: true,
};

const useStyles = makeStyles((theme: Theme) => (
  createStyles({
  card: {
    borderRadius: '25px',
    overflow: 'hidden',
    boxSizing: 'border-box',
    padding: '20px',
    position: 'relative',
    minWidth: '90vw',
    height: '436px',
    margin: '20px 20px',
    [theme.breakpoints.up('mobile')] : {
      minWidth: '360px',
      margin: '20px 30px',
    }
  }})
));

const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 20px ${theme.CardShadow}4d;
  border: 1px solid ${theme.CardDash};
  border-radius: 25px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  &:hover{
    cursor: pointer;
  }
  @media (min-width: ${media.mobileL + 1}px) {
    margin: 20px 30px;
    min-width: ${BoxSize}px;
  }
  @media (max-width: ${media.mobileL}px) {
    margin: 20px ${(props: styleProps) => props.mobileMargin}px;
    max-width: 360px;
    min-width: ${(props: styleProps) => props.MobileBoxSize}vw;
    flex: 1 0;
  }
  ${(props: styleProps) =>
    !props.isCurrent &&
    css`
      opacity: 0.5;
    `};
`;

const Img = styled.img`
  width: 100%;
  height: 90%;
`;

const Description = styled.p`
  font-family: 'pacbooc-medium', sans-serif;
  font-size: 1.8rem;
  text-align: center;
  color: ${theme.SoftPurple};
  @media (max-width: ${media.mobileL}px) {
    font-size: 1.4rem;
  }
`;

export default CardList;
