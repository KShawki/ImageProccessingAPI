import path from 'path';
import SharpAPI from '../routes/image/sharp';
import Exsisting from '../routes/validation';
import supertest from 'supertest';
import { request } from 'express';
import app from '../index';

describe('Main Functions to be defined', (): void => {
  it('function SharpAPI is defined', (): void => {
    expect(SharpAPI).toBeDefined;
  });

  it('function Exsisting Images is defined', (): void => {
    expect(Exsisting).toBeDefined;
  });
});

describe('endpoint testsuite', (): void => {
  // test main page
  it('test main page', async () => {
    const res = await app.get('/');
    expect(res.status).toBe(200);
  });

  // test resize endpoint
  it('test main page', async () => {
    const res = await app.get('/resize');
    expect(res.status).toBe(200);
  });
});