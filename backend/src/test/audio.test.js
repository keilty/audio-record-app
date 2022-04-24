let db = require("../database/models");

const chai = require("chai");
const chaiHttp = require("chai-http");
let app = require("../app");

const expect = chai.expect;

chai.use(chaiHttp);

describe("Audio", () => {
    beforeEach(async () => {
      await db.Audio.create({
        name: "Audio test",
        theme_id: 1,
        recipient_id: 1,
      });
  });
  /*
   * Test the /GET route
   */
  describe("/GET audio", () => {
    it("it should GET all the audios", (done) => {
      chai
        .request(app)
        .get("/audio")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.an("object");
          done();
        });
    });
  });
  /*
   * Test the /PATCH/:id route
   */
  describe("/PATCH/:id audio", () => {
    it("it should UPDATE an audio theme given the id", (done) => {
      let themeUpdate = {
        theme_id: 2,
      };
      chai
        .request(app)
        .patch("/update/1")
        .send(themeUpdate)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.an("object");
          done();
        });
    });
  });
  /*
   * Test the /DELETE/:id route
   */
  describe("/DELETE/:id audio", () => {
    it("it should DELETE an audio given the id", (done) => {
      chai
        .request(app)
        .delete("/delete/1")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.an("object");
          done();
        });
    });
  });
});
