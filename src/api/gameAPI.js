import axios from 'axios';

export const callGameAPI = () => {
  return axios({method: 'GET', url: 'http://localhost:3000/games'});
};
