import axios from 'axios';

const instance = axios.create({
  baseURL: `https://developers.zomato.com/api/v2.1/`,
});

instance.defaults.headers.get['user-key'] = `${process.env.REACT_APP_ZOMATO_API}`;

export default instance;
