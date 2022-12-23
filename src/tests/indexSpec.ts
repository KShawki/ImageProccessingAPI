import path from 'path';
import SharpAPI from '../routes/image/sharp';
import Exsisting from '../routes/validation';

describe('Main Functions to be defined', (): void => {
  it('function SharpAPI is defined', (): void => {
    expect(SharpAPI).toBeDefined;
  });

  it('function Exsisting Images is defined', (): void => {
    expect(Exsisting).toBeDefined;
  });
});
