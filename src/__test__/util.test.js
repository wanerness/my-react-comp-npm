import { trim } from '../utils/util';

describe('trim', () => {
  test('test trim', () => {
    let str = '       12345     ';
    expect(trim(str)).toEqual('12345');
  });
});
