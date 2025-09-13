const mongoose = require('mongoose');

const ledgerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  allocation: { type: Number, required: true }
});

const Ledger = mongoose.model('Ledger', ledgerSchema);

module.exports = Ledger;
