import axios from 'axios'; 
const AI_BASE = 'http://localhost:5000/api/ai';

export const getCompanySummary = async (companyName) => {
    const res = await axios.post(`${AI_BASE}/summary`, { companyName});
    return res.data.summary;
};

export const askAIQuestion = async (question) => {
    const res = await axios.post(`${AI_BASE}/ask`, { question});
    return res.data.answer;
};