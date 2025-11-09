import React , { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCompanyById } from '../services/api';
import ProgressBar from '../components/progressBar';
import { getCompanySummary } from '../aI/aiHelper';

const CompanyDetail = () => {
    const { id } = useParams();
    const [company, setCompany,] = useState(null);
    const [summary, setSummary] = useState('');

    useEffect(() => {
        getCompanyById(id).then(setCompany);
        getCompanySummary(id).then(setSummary);
    }, [id]);

    if (!company) return <p>Loading ...</p>;
    return (
        <section>
            <h2>{company.name}</h2>
            <p>Pledge Year: {company.pledgeYear}</p>
            <p>Target Year: {company.targetYear}</p>
            <ProgressBar progress = {company.progress} />
            <p> Regions: {company.regions.join(', ')}  </p>
            <h3> AI Summary</h3>
            <p>{summary || 'Loading AI insights...'}  </p>

        </section>
    );
};

export default CompanyDetail;