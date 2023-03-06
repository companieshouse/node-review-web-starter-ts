import chai from "chai";
import sinon from "sinon";
import app from "./../../../src/app";

describe("routes/CompanyRoute", () => {
    beforeEach(done => {
        sinon.reset();
        sinon.restore();
        done();
    });

    afterEach(done => {
        sinon.reset();
        sinon.restore();
        done();
    });

    it("should serve up the settings page", () => {
        const slug = "/company/settings";
        return request(app)
            .get(slug)
            .then(response => {
                chai.expect(response).to.have.status(200);
            });
    });
});
