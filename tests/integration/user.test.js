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
        mongoose.connection.collections[collection].deleteOne(() => {});
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
        fName: 'Smita',
        lName: 'shinde',
        email: 'sm@gmail.com',
        password: '1234566'
      };
      request(app)
        .post('/api/v1/users')
        .send(userdetails)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
          done();
        });
    });

    it('given new user when added should return status 400', (done) => {
      const userdetails = {
        fName: 1234,
        lName: 'shinde',
        email: 'sm@gmail.com',
        password: '1234566'
      };
      request(app)
        .post('/api/v1/users')
        .send(userdetails)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.BAD_REQUEST);
          done();
        });
    });
  });

  describe('POST /login', () => {
    it('given new user when added should return status 200', (done) => {
      const userdetails = {
        email: 'sm@gmail.com',
        password: '1234566'
      };
      request(app)
        .post('/api/v1/users/login')
        .send(userdetails)
        .end((err, res) => {
          jwtToken = res.body.data
          expect(res.statusCode).to.be.equal(HttpStatus.OK);
          done();
        });
    });
  });


  describe('POST /note', () => {
    it('given new user when added should return status 200', (done) => {
      const userdetails = {
        Title: 'sm@gmail.com',
        Dest: '1234566'
      };
      request(app)
        .post('/api/v1/users/login')
        .send(userdetails)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.OK);
          done();
        });
    });
  });
 
});
