import axios from 'axios';
import baseUrl from '../routing/config';

export const getBookmarks = async () => {
    return axios({
        method: 'get',
        url: `${baseUrl}/bookmarks`,
        responseType: 'json'
    });
}

export const postBookmark = async id => {
    return axios({
        method: 'post',
        url: `${baseUrl}/bookmarks/${id}`,
        responseType: 'json'
    });
}

export const deleteBookmark = async id => {
    return axios({
        method: 'delete',
        url: `${baseUrl}/bookmarks/${id}`,
        responseType: 'json'
    });
}