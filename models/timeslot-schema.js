const mongoose = require('mongoose');

const timeslotSchema = mongoose.Schema({
    date: String,
    startTime: String,
    bay: String,
    user_id: String
});

module.exports = mongoose.model('Timeslot', timeslotSchema);