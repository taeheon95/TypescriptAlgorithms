import solution from './first';

describe('테스트 케이스', function() {
  it('#1', () => {
    const arr = ['2019/01/01 5000', '2019/01/20 15000', '2019/02/09 90000'];
    const result = solution(arr);
    expect(result).toStrictEqual([315, 9, 11, 20, 10]);
  });

  it('#2', () => {
    const arr = ['2019/01/30 5000', '2019/04/05 10000', '2019/06/10 20000', '2019/08/15 50000', '2019/12/01 100000'];
    const result = solution(arr);
    expect(result).toStrictEqual([245, 30, 30, 30, 30]);
  });
});