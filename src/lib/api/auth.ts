import client from './client';

// 로그인
export const login = ({ userId, password }) => {
  try {
    client
      .post('/api/v1/auth/login', { userId, password })
      .then(response => {
        if (response.status !== 200) {
          alert('아이디 또는 비밀번호가 일치하지 않습니다.');
          return;
        }
        localStorage.setItem('x-access-token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));
        if (response.data.status === 'admin') {
          document.location.replace('/admin');
        } else {
          document.location.replace('/');
        }
        return response.data;
      })
      .catch(e => {
        alert('아이디 또는 비밀번호가 일치하지 않습니다.');
      });
  } catch (e) {
    alert('아이디 또는 비밀번호가 일치하지 않습니다222.');
  }
};

// 회원가입
export const register = ({ name, userId, password }) => {
  client
    .post('/api/v1/auth/join', { name, userId, password })
    .then(response => {
      if (response.status === 200) {
        localStorage.setItem('x-access-token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));
        document.location.replace('/');
      } else if (response.status === 400) {
        alert('이미 존재하는 ID입니다.');
      }
    })
    .catch(e => {
      alert('회원가입 post 실패');
    });
};

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
// export const logout = () => client.post('/api/auth/logout');

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('x-access-token');
  document.location.replace('/');
};

// 중복체크
export const checkId = ({ userId }) => {
  try {
    client
      .post('/auth/join/checkId', { userId })
      .then(response => {
        if (response.status === 400) {
          alert('이미 존재하는 ID입니다.');
          return false;
        }
        if (response.status === 200) {
          alert('사용할 수 있는 ID입니다.');
          return true;
        }
      })
      .catch(e => {
        console.log(e);
        alert('아이디 중복 체크 실패');
      });
  } catch (e) {
    console.error(e);
  }
};