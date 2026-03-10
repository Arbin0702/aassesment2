const request = require("supertest");
const app = require("../server");
const users = require("../mock/users.json");

describe("Negative user tests", () => {
  users.forEach((user, index) => {
    const invalid =
      !user.name ||
      !user.email ||
      !user.email.includes("@") ||
      user.age < 18 ||
      user.age > 120;

    if (invalid) {
      test(`Should reject invalid user row ${index + 1}`, async () => {
        const res = await request(app).post("/users").send(user);

        expect(res.statusCode).toBe(400);
        expect(res.body.errors).toBeDefined();
        expect(Array.isArray(res.body.errors)).toBe(true);
      });
    }
  });
});
