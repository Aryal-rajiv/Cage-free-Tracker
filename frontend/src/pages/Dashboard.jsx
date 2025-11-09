import React, {useEffect, useState} from 'react';
import {getCompanies} from '../services/api' ;
import CompanyCard from '../components/companyCard';
import { askAIQuestion } from '../aI/aiHelper';
import Region from '../components/RegionMap';

const Dashboard = () => {
    const [ companies, setCompanies ] = useState([]);

    //AI Q&A apllication
    const [ question, setQuestion ] = useState('');
    const [ answer, setAnswer ] = useState('');

    const handleAsk = async () => {
        const response = await askAIQuestion(question);
        setAnswer(response);
    }

    useEffect(() => {
        getCompanies().then(setCompanies);
    }, []);

    return (
        <section>
            <h2> Corporate Pledge Dashboard</h2>
            <div className="region-map">
                <Region regionData={{
                    Asia: {progress: 0.3},
                    Europe: {progress: 0.8},
                    Americas: {progress: 0.6},


                }} />
                </div>
            
            <div className = "company-grid">
                {companies.map(c => <CompanyCard key = {c.id} company = {c} />)}
            </div>
            <div className='aiAsk'>
                <input value = {question} onChange={e => setQuestion(e.target.value)} placeholder = "Ask about cage-free progress..." />
                <button onClick = {handleAsk}>Ask AI </button>
                <p> {answer}</p>
            </div>
        </section>
    );
};

export default Dashboard;