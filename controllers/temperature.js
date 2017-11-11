const Temperature = require('../models/temperature');

exports.create = (req, res, next) => {
    let temperature = new Temperature(req.body);

    temperature.save()
    .then(temperatures => {
        res
        .status(201)
        .json(temperatures)
    })
    .catch(err => res.status(500).json({message: err}))
 }

 exports.list = (req, res, next) => {
    Temperature.find({})
    .then(temperatures => {
        res
        .status(200)
        .json(temperatures)
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
 }