const Hobbits = require('./hobbitsModel')
const db = require('../data/dbConfig')

describe("hobbits model", () => {
  beforeEach(async () => {
    await db("hobbits").truncate()
  })

  describe("insert()", () => {
    test("should add the hobbit to the db", async () => {
      // call insert, passing a hobbit object
      await Hobbits.insert({ name: "Sam" })
      await Hobbits.insert({ name: "Gaffer"})
      // check the database directly
      const hobbits = await db("hobbits")
      expect(hobbits).toHaveLength(2)
    })
  })
})