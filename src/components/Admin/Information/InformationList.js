import ImagePreview from '../Common/ImageUploader/ImagePreview';
import Loader from '../../Common/Loader';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import theme from '../../../lib/styles/theme';
import { withStyles } from '@material-ui/core/styles';

function InformationList (props) {
  const { classes, loading, data, error, confirmDeletion } = props;

  const title = '현재 안내 이미지';

  const showTeamCard = () => {
    if (!data) return;
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          data.map((obj, index) => (
            <FlexBlock key={index}>
              <ImagePreview
                alt={'information'}
                fileUrl={obj.image}
                width={'350px'}
                height={'auto'}
                resetImg={() => confirmDeletion(obj.id)}
              />
            </FlexBlock>
          ))
        )}
      </>
    );
  };

  return (
    <Paper className={classes.paper}>
      <Title>{title}</Title>
      <div className={classes.contentWrapper}>{showTeamCard()}</div>
    </Paper>
  );
}

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  color: ${theme.Blue};
  margin: 30px 0;
  text-align: center;
`;

const FlexBlock = styled.div`
  display: inline-block;
  text-align: end;
  margin: 20px;
`;

const styles = () => ({
  paper: {
    maxWidth: 936,
    margin: '30px auto',
    overflow: 'hidden',
    padding: '20px 0',
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
      color: theme.DarkBlue,
    },
  },
});

InformationList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InformationList);
