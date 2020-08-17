import axios from 'axios';

const connectionOptions = {
  emulator: 'http://localhost:3333',
  wifi: 'http://192.168.0.19:3333',
};

const api = axios.create({
  baseURL: connectionOptions.wifi,
});

export default api;
