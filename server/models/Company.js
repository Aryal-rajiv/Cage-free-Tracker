const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: String,
    pledgeYear: Number,
    targetYear: Number,
    progress: Number,
    regions: [String],
    lastUpdated: Date
});

module.exports = mongoose.model('Company', CompanySchema);