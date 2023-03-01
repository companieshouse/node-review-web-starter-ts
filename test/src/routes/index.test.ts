
describe("routes/route-1", () => {
    const app = require(`${serverRoot}/app`);

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

    it("should serve up the index page", () => {
        const slug = "/route-1";
        return request(app)
            .get(slug)
            .then(response => {
                expect(response).to.have.status(200);
            });
    });

    it("should serve up handler-1", () => {
        const slug = "/route-1/handler-1";
        return request(app)
            .get(slug)
            .then(response => {
                expect(response).to.have.status(200);
            });
    });

    it("should fail to serve up an invalid path", () => {
        const slug = "/route-invalid/handler-invalid";
        return request(app)
            .get(slug)
            .then(response => {
                expect(response).to.have.status(404);
            });
    });
});
