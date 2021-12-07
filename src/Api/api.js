import * as axios from 'axios';

const instance = axios.create({
    baseURL: `http://localhost:3500/`,
})

export const weatherAPI = {
    async getActualStat(region, city) {
        const response = await instance.get(`stat/${region}/${city}`);
        return response;
    }
}