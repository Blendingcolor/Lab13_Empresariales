import API from "../config/axiosConfig";

const PREFIX_URL = 'http://localhost:8000/series/api/v1/series/';

export const getAllSerieService = async () => {
    const response = await API.get(PREFIX_URL);
    return response;
};

export const createSerieService = async (datos) => {
    const response = await API.post(PREFIX_URL, datos);
    return response;
};

export const showSerieService = async (id) => {
    const response = await API.get(`${PREFIX_URL}${id}/`);
    return response;
};

export const updateSerieService = async (id, datos) => {
    const response = await API.put(`${PREFIX_URL}${id}/`, datos);
    return response;
};

export const deleteSerieService = async (id) => {
    const response = await API.delete(`${PREFIX_URL}${id}/`);
    return response;
};