const request = require('supertest');

const {app, server} = require('../index');

describe('Test to list out all gifs', () => {
    test('it should list out all gifs', async () =>{
        const response = await request(app).get('/gifs');
        expect(response.body.length).toBeDefined()
        // expect(response.status).toBe(200);
    })
})
// describe('Test to list out all gifs', () => {
//     test('it should list out all gifs', async () =>{
//         const response = await request(app).get('/gifs');
//         expect(response.body.id).toEqual()
//         // expect(response.status).toBe(200);
//     })
})
describe('id', () => {
    test('it should list out all gifs', async () =>{
        const response = await request(app)
        .get('/gifs/paste the id here')
        expect(response.body._id).toEqual('past the id here');
        expect(response.statusCode).toBe(200)
    })
})

// describe('Get a gif with a specific ID', () => {
//     test('it should return a gif ID', async () =>{
//         const response = await request(app).get(req.params.id);
//         expect(response.status).toBe(200);
//     })
// })

afterAll(done => {
    server.close();
    done();
})