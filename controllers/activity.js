const Activity = require('../models/activity');

exports.create = (req, res, next) => {
    let activity = new Activity(req.body);

    activity.save()
    .then(activities => {
        res
        .status(201)
        .json(activities)
    })
    .catch(err => res.status(500).json({message: err}))
 }

 exports.list = (req, res, next) => {
    Activity.find({})
    .then(activities => {
        res
        .status(200)
        .json(activities)
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
 }