import React, { useState } from 'react';
import Pagination from './Pagination'
//import Pagination from './Common/Pagination';
import Icon from '../../../public/img/board/boardIcon.svg';
//import WriteButton from '../../../public/img/board/writeButton.svg'
import media from '../../lib/styles/media';
import styled from 'styled-components';
import theme from '../../lib/styles/theme';

//
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


/*
<Grid item xs={12} className="그리드">
      <Button
      className="글쓰기버튼"
      variant='contained'
      color='primary'
      type='button'
      >
      글쓰기
      </Button>
      </Grid>
*/

const WritingPage = () => {

  const getMovies = () => { // 영화 정보를 반환하는 함수
    const movies = [
      { id: 0, title: "기생충", genre: "블랙 코미디", release: "2019-05-30" },
      { id: 1, title: "라이온 킹", genre: "애니메이션", release: "2019-07-17" },
      { id: 2, title: "날씨의 아이", genre: "애니메이션", release: "2019-10-31" },
      { id: 3, title: "알라딘", genre: "판타지", release: "2019-05-23" },
      { id: 4, title: "나랏말싸미", genre: "역사", release: "2019-07-24" },
      { id: 5, title: "주전장", genre: "역사", release: "2019-07-25" },
      { id: 6, title: "어벤져스: 엔드게임", genre: "판타지", release: "2019-04-24" },
      { id: 7, title: "봉오동 전투", genre: "역사", release: "2019-08-07" },
      { id: 8, title: "김복동", genre: "역사", release: "2019-08-08" },
      { id: 9, title: "코코", genre: "애니메이션", release: "2018-01-11" },
    ]
    return movies;
  }

  const [movies, setMovies] = useState({ // 영화 정보를 담는 state
    data: getMovies(),
    pageSize: 3 // 한 페이지에 보여줄 아이템(영화목록) 개수
  });

  const { length: count } = movies.data;
  if(count === 0)
    return <p>영화 정보가 없습니다.</p>

  return (
    <>

      <Article>
      <IconBlock>
        <img src={Icon} alt="board icon" />
      </IconBlock>
    </Article>

    

    <AuthFormBlock>
      <CategoryBlock></CategoryBlock>

      <Button
      className="글쓰기버튼"
      variant='contained'
      color='primary'
      type='button'
      >
      글쓰기
      </Button>

     
      
    
    </AuthFormBlock>


    <BoardBlock>
    <React.Fragment>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>제목</th>
            <th>Genre</th>
            <th>Release</th>
          </tr>
        </thead>
        <tbody>
          {movies.data.map(movie =>
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.release}</td>
            </tr>
          )}
        </tbody>
      </table>

      </React.Fragment>
    </BoardBlock>
    
    
    <AuthFormBlock>
      <Footer>
      <Pagination
        itemsCount={count}
        pageSize={movies.pageSize}/>
      </Footer>
    </AuthFormBlock>  
    </>
  );
};


const PageNum = styled.div`
display: flex;
width: 50px;
height: 50px;
justify-content: center;

`

const CategoryBlock = styled.div`
  display: flex;

  margin: 10px 120px 30px 120px;
  background: #eae3ff;
  width: 1280px;
  height: 126px; 
  flex-direction: column;
  justify-content: space-around;
  
`;

const BoardBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 120px;
  width: 1280px;
  height: 905px;
`;


const WriteButtonBlock = styled.div`
  display: flex;
  padding-right: 1rem;
  width: 1280px;
  height: 32px;
`

const AuthFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
  }
`;

const Footer = styled.div`
  margin: 40px auto;
  a {
    text-decoration: underline;
    font-size: 1.4rem;
    font-weight: bold;
    &:hover {
      color: ${theme.Blue};
    }
  }
`;


// 원본(상단 아이콘)
const IconBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
  
const boardIcon = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 auto;
`;

const Article = styled.article`
  width: ${media.laptop}px;
  margin: 0 auto;
  padding: 30px 0;
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
    min-width: 320px;
  }
`;



//
const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  title: {
    textAlign: 'center',
    margin: '40px',
    fontWeight: 'bold',
    color: '#5d3fe8',
    fontFamily: 'paybooc-medium',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    margin: '80px 40px',
  },
  uploader: {
    width: '45%',
  },
  buttonWrap: {
    textAlign: 'right',
    margin: '20px',
  },
  button: {
    width: '100px',
    height: '40px',
    borderRadius: '15px',
    margin: '0 10px',
  },
  closeButton: {
    width: '20px',
    height: '20px',
    color: 'white',
    fontSize: '1.3rem',
    position: 'absolute',
    zIndex: '1',
    top: '20px',
    left: '20px',
  },
});


export default WritingPage;