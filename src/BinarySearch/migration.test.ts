import migration from './Migration';

describe('입국 심사', function() {
  it('test case #1', () => {
    const ans = migration(6, [7, 10]);
    expect(ans).toBe(28);
  });
});