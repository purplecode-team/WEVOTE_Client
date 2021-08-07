import client from './client';

// 로그인
export const login = async ({ userId, password }) => {
  try {
    const response = await client.post('/api/v1/auth/login', { userId, password });
    if (response.status !== 200) {
      throw new ReferenceError();
    }
    localStorage.setItem('x-access-token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
 } catch (e) {
    alert('아이디 또는 비밀번호가 일치하지 않습니다.');
  }
};

// 회원가입
export const register = async ({ name, userId, password }) => {
  try{
    const response = await client.post('/api/v1/auth/join', { name, userId, password });
    if (response.status === 400) {
      throw new Error('이미 존재하는 ID');
    } else if (response.status !== 200) {
      throw new Error();
    }
    localStorage.setItem('x-access-token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  }
  catch(e){
    alert('회원가입 실패');
  };
};

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('x-access-token');
};

// 로그인 상태 확인
// export const check = () => client.get('/api/auth/check');

// 중복체크
// export const checkId = ({ userId }) => {
//   try {
//     client
//       .post('/auth/join/checkId', { userId })
//       .then(response => {
//         if (response.status === 400) {
//           alert('이미 존재하는 ID입니다.');
//           return false;
//         }
//         if (response.status === 200) {
//           alert('사용할 수 있는 ID입니다.');
//           return true;
//         }
//       })
//       .catch(e => {
//         console.log(e);
//         alert('아이디 중복 체크 실패');
//       });
//   } catch (e) {
//     console.error(e);
//   }
// };