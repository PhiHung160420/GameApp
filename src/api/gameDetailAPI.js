import axios from 'axios';

export const callGameDetailAPI = id => {
  return axios({method: 'GET', url: `http://localhost:3000/games/${id}`});
};
