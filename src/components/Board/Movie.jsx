import React, { useState } from 'react';
/*
import Like from '/Like';

const Movies = () => {
  const [movies, setMovies] = useState([
    { id: 0, title: "기생충", release: "2019-05-30", liked: true },
    { id: 1, title: "라이온 킹", release: "2019-07-17" },
    { id: 2, title: "알라딘", release: "2019-05-23" },
    { id: 3, title: "나랏말싸미", release: "2019-07-24" },
    { id: 4, title: "주전장", release: "2019-07-25", liked: true },
    { id: 5, title: "어벤져스: 엔드게임", release: "2019-04-24", liked: true }
  ]);

  const handleDelete = (movie) => {
    const newMovies = movies.filter(m => m.id !== movie.id);
    setMovies(newMovies);
  }

  // 좋아요 아이콘 클릭 이벤트 처리기
  const handleLike = (movie) => {
    const newMovies = [...movies];
    const index = newMovies.indexOf(movie);
    newMovies[index] = { ...movies[index] };
    newMovies[index].liked = !movies[index].liked;
    setMovies(newMovies);
  }

  const { length: count } = movies;

  if (count === 0)
    return <p>영화 정보가 없습니다.</p>

  return (
    <React.Fragment>
      <p>{count} 개의 영화 정보가 있습니다.</p>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>제목</th>
            <th>출시일</th>
            <th>좋아요</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie =>
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.release}</td>
              <td><Like liked={movie.liked} onClick={() => handleLike(movie)} /></td>
              <td><button onClick={() => handleDelete(movie)}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </React.Fragment>
  );
}*/

export default Movies;


/* 
import React, { useState } from 'react';
import Like from '/Like';

const Movies = () => {
  const [movies, setMovies] = useState([
    { id: 0, title: "기생충", release: "2019-05-30", liked: true },
    { id: 1, title: "라이온 킹", release: "2019-07-17" },
    { id: 2, title: "알라딘", release: "2019-05-23" },
    { id: 3, title: "나랏말싸미", release: "2019-07-24" },
    { id: 4, title: "주전장", release: "2019-07-25", liked: true },
    { id: 5, title: "어벤져스: 엔드게임", release: "2019-04-24", liked: true }
  ]);

  const handleDelete = (movie) => {
    const newMovies = movies.filter(m => m.id !== movie.id);
    setMovies(newMovies);
  }


  const { length: count } = movies;

  if (count === 0)
    return <p>영화 정보가 없습니다.</p>

  return (
    <React.Fragment>
      <p>{count} 개의 영화 정보가 있습니다.</p>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>제목</th>
            <th>출시일</th>
            <th>좋아요</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie =>
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.release}</td>
              <td><Like liked={movie.liked} onClick={() => handleLike(movie)} /></td>
              <td><button onClick={() => handleDelete(movie)}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Movies;
*/