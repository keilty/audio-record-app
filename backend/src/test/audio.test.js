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
        date_time: "2020-01-01",
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
   * Test the /POST route
   */
  describe("/POST audio", () => {
    it("it should POST an audio", (done) => {
      let newAudio = {
        name: "Audio create",
        date_time: "2020-01-01",
        theme_id: 2,
        recipient_id: 2,
      };
      chai
        .request(app)
        .post("/create")
        .send(newAudio)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.an("object");
          expect(res.body).to.have.property("msg").eql("The audio was created");
          done();
        });
    });
  });
  /*
   * Test the /PUT/:id route
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
          expect(res).to.have.status(201);
          expect(res).to.be.an("object");
          expect(res.body).to.have.property("msg").eql("The audio was updated");
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
          expect(res).to.have.status(201);
          expect(res).to.be.an("object");
          expect(res.body).to.have.property("msg").eql("The audio was deleted");
          // expect(response.body.audio).to.have.property("ok").eql(1);
          done();
        });
    });
  });
});
