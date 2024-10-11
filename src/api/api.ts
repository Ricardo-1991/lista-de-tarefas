import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3000',
  timeout: 10000, // Tempo limite de 10 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
