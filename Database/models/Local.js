const mongoose = require('mongoose')

const Local = mongoose.model('Local',{
    lat: Number,
    lng: Number,
})
module.exports = Local