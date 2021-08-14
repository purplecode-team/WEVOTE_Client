import React, {useState} from 'react';
//import Like from './Like'

import Icon from '../../../public/img/board/boardIcon.svg';
import WriteButton from '../../../public/img/board/writeButton.svg'
import media from '../../lib/styles/media';
import styled from 'styled-components';
import theme from '../../lib/styles/theme';


const BoardSection = () => {

  const [write, setwriting] = useState([
    { id: 0, title: "이거 바꿔주세요", release: "2019-05-30", liked: true },
    { id: 1, title: "저거 바꿔주세요", release: "2019-07-17" },
    { id: 2, title: "이거 어때요", release: "2019-05-23" },
    { id: 3, title: "저거 어때요", release: "2019-07-24" },
    { id: 4, title: "이거 해주세요", release: "2019-07-25", liked: true },
    { id: 5, title: "저거 해주세요", release: "2019-04-24", liked: true },
    { id: 6, title: "등록금 줄여주세요", release: "2019-05-31", liked: true },
    { id: 7, title: "장학금 더 주세요", release: "2019-07-07" },
    { id: 8, title: "축제에 누구 불러주세요", release: "2019-05-03" },
    { id: 9, title: "교양 과목 늘려주세요", release: "2019-07-14" },
  ]);

  const handleDelete = (writing) => {
    const newWritings = write.filter(m => m.id !== writing.id);
    setwriting(newWritings);
  }

  const { length: count } = write;

  if (count === 0)
    return <p>게시글 정보가 없습니다.</p>
  
  return (
    
      <><Article>
      <IconBlock>
        <img src={Icon} alt="board icon" />
      </IconBlock>
    </Article>
    
  
    <AuthFormBlock>
      <CategoryBlock></CategoryBlock>
      <Footer>{'글쓰기'}</Footer>
    </AuthFormBlock>


    <BoardBlock>
    <React.Fragment>
    <table className="table">
    <thead>
          <tr>
            <th>ID</th>
            <th>제목</th>
            <th>날짜</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {write.map(writing =>
            <tr key={writing.id}>
              <td>{writing.id}</td>
              <td>{writing.title}</td>
              <td>{writing.release}</td>
              <td><button onClick={() => handleDelete(writing)}>Delete</button></td>
            </tr>
          )}
        </tbody>
    </table>
    </React.Fragment>
    </BoardBlock></>


  );

}


/*
<WriteButtonBlock>
        <div>
        <img src ={WriteButton} alt = "write button"/>
        </div>
      </WriteButtonBlock>
*/

// 추가
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

export default BoardSection;