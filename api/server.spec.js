const request = require('supertest')

const server = require('./server')

describe("server,js", () => {
  describe("environment", () => {
    test("should set environment to testing", () => {
      expect(process.env.DB_ENV).toBe("testing")
    })
  })

  describe("GET /", () => {
    test("should return a 200 of status OK", () => {
      // spin up the server
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200)
      })
      // make a GET request to /
      // look at the HTTP status code for the resp
    })

    test("should return json", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toMatch(/json/i)
      })
    })

    test("should return an api object with up", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body.api).toBe("up")
      })
    })

    test.skip("auth example of setting header", () => {
      return request(server)
        .post('/login')
        .send({ username: "me", password: "pass"})
        .then(res => {
          const token = res.body.token
          .get("/")
          .set("Authorization", token)
          .then(res => {
            expect(Array.isArray(res.body)).toBe(true)
        })
      })
    })
  })
})