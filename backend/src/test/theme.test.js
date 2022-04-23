let Theme = require("../database/models/theme");

const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

const expect = chai.expect;

chai.use(chaiHttp);

describe("Theme", () => {
//   beforeEach((done) => {
//     //Before each test we empty the database
//     Theme.remove({}, (err) => {
//       done();
//     });
//   });
  /*
   * Test the /GET route
   */
  describe("/GET theme", () => {
    it("it should GET all the themes", (done) => {
      chai
        .request(app)
        .get("/theme")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.an("object");
          done();
        });
    });
  });
});
