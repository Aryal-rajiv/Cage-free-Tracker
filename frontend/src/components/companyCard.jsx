import React from 'react';
import { Link } from 'react-router-dom';

const CompanyCard = ({ company }) => (
    <div className="company-card">
        <h3>{company.name}</h3>
        <p>Pledge Year: {company.pledgeYear}</p>
        <p>Target Year: {company.targetYear}</p>
        <p> Progress: {Math.round(company.progress * 100)}%</p>
        <Link to = {`/company/${company._id}`}>view Details</Link>
    </div>
);
export default CompanyCard;