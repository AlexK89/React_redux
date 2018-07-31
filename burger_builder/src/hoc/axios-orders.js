import axios from 'axios';
import databaseUrl from '../databaseUrl';

const instance = axios.create({
   baseURL: databaseUrl,
});

export default instance;
