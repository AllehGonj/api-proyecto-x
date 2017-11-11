require('should');

const app     = require('../../');
const request = require('supertest')(app);

describe('Logs', () => {
    it('When I request GET /logs/temperature should return a list with the logs for activities', () => {
        return request
        .post('/logs/activities')
        .send({
            distance: 20,
            action: 'ON'
        })
        .expect(201)
        .then(res => res.body)
        .then(body => {
            body.action.should.equal('ON');
            body.distance.should.equal(20)
        })
    })    

    it('When I request POST /logs/temperature should return a list with the logs for temperature', () => {
        return request
        .post('/logs/temperatures')
        .send({
            temperature: 30
        })
        .expect(201)
        .then(res => res.body)
        .then(body => {
            body.temperature.should.equal(30)
        })
    })    
    it('When I request GET /logs/temperature should return a list with the logs for temperature', () => {
        return request
        .get('/logs/temperatures')
        .expect(200)
        .then(res => res.body)
        .then(body => {
            body.length.should.above(0);
        })
    })   
    it('When I request GET /logs/temperature should return a list with the logs for activities', () => {
        return request
        .get('/logs/activities')
        .expect(200)
        .then(res => res.body)
        .then(body => {
            body.length.should.above(0);
            body[0].should.have.properties(['action'])
        })
    })   
})
