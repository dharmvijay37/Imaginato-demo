const request = require("supertest");
const app = require("../src/app");

describe("Test articles", () => {
  test("It should response an article", async () => {
    const response = await request(app).get("/article/"+1);
    expect(response.statusCode).toBe(200);
  });
  test("It should response all articles", async () => {
    const response = await request(app).get("/articles?perPage=20&page=1");
    expect(response.statusCode).toBe(200);
  });
});