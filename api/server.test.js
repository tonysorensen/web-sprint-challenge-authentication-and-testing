const db = require('../data/dbConfig')
const request = require('supertest')
const server = require('./server')

beforeAll(async () => {
  await db.migrate.rollback(); // takes back the db to the stone age
  await db.migrate.latest(); // bringing to the latest
});
beforeEach(async () => {
  await db("users").truncate(); // wipes rows, and resets id numbers
});
afterAll(async () => {
  await db.destroy();
});



// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})
describe('[POST] /register', () => {
  it('registers a new user and returns it', async() => {
    const newUser= await request (server).post('/api/auth/register').send({username:"test2", password: "1234"})
//console.log("here", newUser.body)
    expect(newUser.body.username).toEqual('test2')

  });
  
});
