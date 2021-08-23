import client from './client';

// 로그인
export const login = async ({ userId, password }) => {
  try {
    const response = await client.post('/api/v1/auth/login', { userId, password });
    if (response.status !== 200) {
      throw new ReferenceError();
    }
    localStorage.setItem('Authorization', response.headers['Authorization']);
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
 } catch (e) {
    console.error(e);
  }
};

// 회원가입
export const register = async ({ nickName, userId, password }) => {
  try{
    const response = await client.post('/api/v1/auth/join', { nickName, userId, password, status:'user' });
    if (response.status === 400) {
      throw new Error('이미 존재하는 ID');
    } else if (response.status !== 200) {
      throw new Error('회원가입 실패');
    }
    localStorage.setItem('Authorization', response.headers['Authorization']);
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  }
  catch(e){
    console.error(e);
  };
};

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('Authorization');
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