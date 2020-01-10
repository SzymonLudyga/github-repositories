import axios from 'axios';
import baseUrl from '../routing/config';

const apiCall = async (method, resource) => axios({
    method,
    url: `${baseUrl}/${resource}`,
    responseType: 'json'
});

export default apiCall;
