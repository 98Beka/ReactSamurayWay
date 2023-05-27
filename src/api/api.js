import axios from 'axios';

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 3) {
        return axios.get(`https://127.0.0.1:7292/api/Users?page=${currentPage}&pageSize=${pageSize}`)
            .then(responce => {
                return responce.data;
            });
    }
}