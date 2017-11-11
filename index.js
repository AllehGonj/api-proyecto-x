const express = require('express');
const app     = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const temperatureController = require('./controllers/temperature');
const activityController = require('./controllers/activity');

mongoose.connect('mongodb://localhost:27017');

app.use(bodyParser.json());

app.post(
    '/logs/temperatures',
    temperatureController.create
);
app.get(
    '/logs/temperatures',
    temperatureController.list
);

app.post(
    '/logs/activities',
    activityController.create
);
app.get(
    '/logs/activities',
    activityController.list
);


if(require.main == module){
    app.listen(process.env.PORT || 3000, (err) => {
        console.log('[+] app listening at port 3000');
    });
}else {
    module.exports = app;
}



