import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../lib/styles/theme';
import media from '../../../lib/styles/media';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ImageUploader from 'react-images-upload';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import img1 from '../../../../public/img/information.png';
import img2 from '../../../../public/img/information.png';
import img3 from '../../../../public/img/information.png';

function InformationForm (props) {
  const { classes } = props;
  const [pictures, setPictures] = useState([]);
  const [images, setImages] = useState([img1, img2, img3, img1, img2, img3]);

  const showTeamCard = () => {
    return images.map((image, index) => (
      <FlexBlock key={index}>
        <HighlightOffIcon className={classes.icon} />
        <Box>
          <Img src={image} alt='information' />
        </Box>
      </FlexBlock>
    ));
  };

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>{showTeamCard()}</div>
    </Paper>
  );
}
const FlexBlock = styled.div`
  display: inline-block;
  text-align: center;
`;
const Box = styled.div`
  max-width: 300px;
  margin: 20px 35px 20px 35px;
  background: #ffffff;
  box-shadow: 0px 0px 20px ${theme.CardShadow}4d;
  border: 1px solid ${theme.CardDash};
  border-radius: 25px;
  box-sizing: border-box;
  overflow: hidden;
  @media (min-width: ${media.mobileL + 1}px) {
    width: 600px;
  }
  @media (max-width: ${media.mobileL}px) {
    max-width: 360px;
    flex: 1 0;
    margin: 20px 0px 20px 20px;
  }
`;

const Img = styled.img`
  width: 100%;
  display: block;
  @media (max-width: ${media.mobileL}px) {
    height: 400px;
  }
`;

const styles = () => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  contentWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '40px 16px',
  },
  icon: {
    width: '30px',
    height: '30px',
    color: theme.Blue,
    '&:hover': {
      cursor: 'pointer',
      color: '#f00',
    },
  },
});

InformationForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InformationForm);
