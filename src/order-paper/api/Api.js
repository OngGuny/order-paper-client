import axios from 'axios';

const SERVER_ENDPOINT = process.env.REACT_APP_SERVER_ENDPOINT;

const api = axios.create({
  baseURL: SERVER_ENDPOINT,
});

export default api;