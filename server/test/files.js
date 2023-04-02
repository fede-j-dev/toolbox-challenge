let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");

//Assertion style
const should = chai.should();
chai.use(chaiHttp);

describe("Files fetching", () => {
  // Get all files call
  describe("Get all files api call", () => {
    it("Should get all files", (done) => {
      chai
        .request(server)
        .get("/apihost/files/data")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          response.body.length.should.be.eq(9);
          done();
        });
    });

    it("Should not get files when passing wrong uri", (done) => {
      chai
        .request(server)
        .get("/apihost/file/data")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  //Get Files list call

  describe("Get files list api call", () => {
    it("Should get files list", (done) => {
      chai
        .request(server)
        .get("/apihost/files/list")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("files").and.to.be.an("array");
          done();
        });
    });

    it("Should not get files list when passing wrong uri", (done) => {
      chai
        .request(server)
        .get("/apihost/files/list/wrongUri")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  //Get specific file call

  describe("Get specific file api call", () => {
    it("Should get only one file", (done) => {
      chai
        .request(server)
        .get("/apihost/files/data?fileName=test9.csv")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          response.body.length.should.be.eq(1);
          done();
        });
    });
  });
});
