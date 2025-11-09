import React from 'react';

const ProgressBar = ({ progress }) => (
    <div className='progress-bar'>
        <div style = {{ width: `${progress * 100}%`}} className="fill" />
    </div>
);

export default ProgressBar;
