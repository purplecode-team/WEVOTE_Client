import axios from 'axios';

const client = axios.create();

// 글로벌 설정 예시:

// client.defaults.baseURL = 'http://localhost:8080';
client.defaults.withCredentials = true;

axios.interceptors.request.use(
  (request) => {
    const accessToken = localStorage.getItem('Authorization');
    // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
    client.defaults.headers.common['Authorization'] = `${accessToken}`;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
