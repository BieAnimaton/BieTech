import axios from 'axios';

const api = axios.create({ baseURL: 'https://bie-tech-api.herokuapp.com/api/usuarios' });

export default api;