const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightsSchema = new mongoose.Schema({
  airline: { type: String, enum: ['American', 'Soutwest', 'United'] },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: { type: Number, min: 10, max: 9999 },
  departs: Date,
},);

// Compile the schema into a model and export it
module.exports = mongoose.model('Flights', flightsSchema);