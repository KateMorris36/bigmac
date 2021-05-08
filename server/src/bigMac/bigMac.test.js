// import request from 'supertest-as-promised';
const httpStatus = require('http-status');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('../../server');

describe('## Big Mack API Tests', () => {
  beforeEach(() => {});

  afterEach(() => {});

  describe('### GET /bigmac', () => {
    it('should return a list of 10 elements', () => {
      request(app)
        .get('/api/bigmac')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.locationList).to.exist;
          expect(res.body.locationList.length).to.equal(2);
        });
    });
  });
});
