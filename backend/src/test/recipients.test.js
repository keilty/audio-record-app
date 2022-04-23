let Recipient = require("../database/models/recipient");

const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

const expect = chai.expect;

chai.use(chaiHttp);

describe("Recipient", () => {
//   beforeEach((done) => {
//     //Before each test we empty the database
//     Recipient.remove({}, (err) => {
//       done();
//     });
//   });
  /*
   * Test the /GET route
   */

  describe("/GET recipient", () => {
    it("it should GET all the recipients", (done) => {
      chai
        .request(app)
        .get("/recipient")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.an("object");
          done();
        });
    });
  });
});
