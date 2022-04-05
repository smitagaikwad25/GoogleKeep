import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';

import HttpStatus from 'http-status-codes';


import app from '../../src/index';

let jwtToken;

describe('User APIs Test', () => {
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => { });
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      mongooseConnect();
    } else {
      clearCollections();
    }

    done();
  });

  describe('POST /registration', () => {

    it('given new user when added should return status 201', (done) => {
      const userdetails = {
        fName: "Smita",
        lName: "shinde",
        email: "smita123456@gmail.com",
        password: "1234566"
      };
      request(app)
        .post('/api/v1/users')
        .send(userdetails)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
          done();
        });

    });

    it('given new user when added invalid details return ', (done) => {
      const userdetails = {
        fName: 123,
        lName: "shinde",
        email: "smita123456",
        password: "1234566"
      };
      request(app)
        .post('/api/v1/users')
        .send(userdetails)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.INTERNAL_SERVER_ERROR);
          done();
        });

    });
  });

});
