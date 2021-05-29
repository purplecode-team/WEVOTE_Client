import axios from 'axios';

const client = axios.create();

// 글로벌 설정 예시:

client.defaults.baseURL = 'https://localhost:8080';
// client.defaults.baseURL =
client.defaults.withCredentials = false;

axios.interceptors.request.use(
  request => {
    let accessToken = localStorage.getItem('x-access-token');
    // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
    client.defaults.headers.common['x-access-token'] = `${accessToken}`;
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

export default client;
