let expect = require("chai").expect;
let request = require("request");

// The unit Test using Chai and Mocha
describe("Status and content", function () {
  describe("GET /github/search/:query", function () {
    it("should have a status of 200", function (done) {
      request("http://localhost:4000/github/search/example", function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    // The response from the server shpuld contain an "items" property.
    it("should contain 'items' property", function (done) {
      request("http://localhost:4000/github/search/example", function (error, response, body) {
        const data = JSON.parse(body);
        expect(data).to.have.property("items");
        done();
      });
    });

  });
});
