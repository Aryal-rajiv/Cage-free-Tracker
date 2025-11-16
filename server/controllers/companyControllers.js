const Company = require('../models/Company');

const getAllCompanies = async (req, res) => {
    const companies = await Company.find();
    res.json(companies);
};

const getCompanyById = async (req, res) => {
    const company = await Company.findById(req.params.id);
    res.json(company);
};

module.exports = {
    getAllCompanies,
    getCompanyById
};

