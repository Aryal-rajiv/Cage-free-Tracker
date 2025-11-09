import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const getCompanies = async () => {
    const res = await axios.get(`${API_BASE}/companies`);
    return res.data;
};

export const getCompanyById = async (id) => {
    const res = await axios.get(`{$API_BASE}/companies/${id}`);
    return res.data;
}