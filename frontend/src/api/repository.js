import axios from 'axios';
import baseUrl from '../routing/config';

export const getRepositories = async query => {
    return axios({
        method: 'get',
        url: `${baseUrl}/repositories?q=${query}`,
        responseType: 'json'
    });
}