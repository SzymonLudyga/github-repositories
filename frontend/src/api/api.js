import axios from 'axios';
import baseUrl from '../routing/config';

export const apiCall = async (method, resource) => {
    return axios({
        method,
        url: `${baseUrl}/${resource}`,
        responseType: 'json'
    });
}