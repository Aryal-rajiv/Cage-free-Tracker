const { getCompanySummary } = require('../services/grokService')
exports.summary = async (req, res) => {
    const {companyName} = req.body;
    const summary = await getCompanySummary(companyName);
    res.json({summary});
};


exports.ask = async (req, res) => {
    const { question } = req.body;
    const response = await getCompanySummary(question);
    res.json({ response });
}