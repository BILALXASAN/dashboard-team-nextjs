import axios from "axios";

const baseUrl = 'http://localhost:3000/api';

const getTeamsInfo = async () => {
    try {
        const res = await axios.get(`${baseUrl}/tableofteam`);
        return res.data;
    } catch (error) {
        console.log(error);
        return {status: 'error'};
    }
}

const getTeams = async () => {
    try {
        const res = await axios.get(`${baseUrl}/teams`);
        return res.data;
    } catch (error) {
        console.log(error);
        return {status: 'error'};
    }
}

const getTeaming = async () => {
    try {
        const res = await axios.get(`${baseUrl}/teams/${teams}`);
        return res.data;
    } catch (error) {
        console.log(error);
        return {status: 'error'};
    }
}

export { getTeams, getTeamsInfo, getTeaming };