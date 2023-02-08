const SampleServiceOne = require(`${serverRoot}/services/sample_service_one`);
const fakeData = require(`${testRoot}/server/services/fake_data`);

describe('service/SampleServiceOne', () => {

  const instance = new SampleServiceOne();

  beforeEach(() => {
    sinon.reset();
    sinon.restore();
  });

  afterEach(done => {
    sinon.reset();
    sinon.restore();
    done();
  });

  it('should serve up a list of items', () => {
    let stub = sinon.stub(instance, 'getList').returns(Promise.resolve(fakeData.getList));
    expect(instance.getList()).to.be.fulfilled;
    expect(stub).to.have.been.calledOnce;
  });

  it('should serve up details of a single item', () => {
    let stub = sinon.stub(instance, 'getDetails').returns(Promise.resolve(fakeData.getDetails));
    expect(instance.getDetails('abc123')).to.be.fulfilled;
    expect(stub).to.have.been.calledOnce;
  });

  it('should create a record for single item', () => {
    let stub = sinon.stub(instance, 'saveItem').returns(Promise.resolve(fakeData.saveItem));
    expect(instance.saveItem('abc123')).to.be.fulfilled;
    expect(stub).to.have.been.called;
  });

});
