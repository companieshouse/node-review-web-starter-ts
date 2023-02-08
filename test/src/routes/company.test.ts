import { app } from "./../../../src/app";
import { CompanyRoute } from "./../../../src/routes/companyRoute";

describe('routes/CompanyRoute', () => {

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

  it('should serve up the settings page', () => {
    let slug = '/company/settings';
    return request(app)
      .get(slug)
      .then(response => {
        expect(response).to.have.status(200);
      });
  });

});
