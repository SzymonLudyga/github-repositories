import axios from 'axios';
import baseUrl from '../routing/config';

export async function getRepositories(query) {
    return axios({
        method: 'get',
        url: `${baseUrl}/repositories?q=${query}`,
        responseType: 'json'
    });
}