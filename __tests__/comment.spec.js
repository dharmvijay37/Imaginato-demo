const request = require("supertest");
const app = require("../build/app");

describe("Test Comments", () => {
  test("It should response Comments of an article", async () => {
    const response = await request(app).get("/article/"+1+"/comment");
    expect(response.statusCode).toBe(200);
  });
});