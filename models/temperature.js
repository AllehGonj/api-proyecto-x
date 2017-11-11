const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const temperatureSchema = new Schema({
    temperature: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: function(){
            return new Date();
        }
    }
});

module.exports = mongoose.model('temperature', temperatureSchema);