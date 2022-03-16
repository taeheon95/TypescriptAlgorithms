import solution from './WeightOfCH';

describe('탄화수소의 질량', function() {
  it('C10H5', () => {
    const ans = solution('C10H5');
    expect(ans).toBe(125);
  });
  it('C100H100', () => {
    const ans = solution('C100H100');
    expect(ans).toBe(1300);
  });
  it('C2H100', () => {
    const ans = solution('C2H100');
    expect(ans).toBe(124);
  });
  it('C100H', () => {
    const ans = solution('C100H');
    expect(ans).toBe(1201);
  });
  it('CH10', () => {
    const ans = solution('CH10');
    expect(ans).toBe(22);
  });
});