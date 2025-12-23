const mongoose = require('mongoose');

const ledgerSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true }, // e.g., 'transport', 'education'
    title: String,
    description: String,
    allocation: Number,
    date: { type: Date, default: Date.now }
});
const Ledger = mongoose.model('Ledger', ledgerSchema);

module.exports = Ledger;
