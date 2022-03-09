import * as fs from 'fs';
import m_nums_sum from './m_nums_sum';

describe('1부터 N까지 M의 배수합 테스트', function() {
  const inputs: number[][] = [];
  const outputs: number[] = [];
  beforeAll(() => {
    fs.readFileSync(__dirname + '/input.txt', 'utf8')
      .split('\r\n')
      .map((input)=> {
        const inp = input.split(' ');
        return inp.map(value=>Number(value));
      })
      .forEach((input)=>inputs.push(input));
    fs.readFileSync(__dirname + '/output.txt', 'utf8')
      .split('\r\n')
      .forEach((output)=>outputs.push(Number(output)));
  });

  it('Test Case #1', () => {
    const out = m_nums_sum(inputs[0][0], inputs[0][1]);
    expect(out).toBe(outputs[0]);
  });
  it('Test Case #2', () => {
    const out = m_nums_sum(inputs[1][0], inputs[1][1]);
    expect(out).toBe(outputs[1]);
  });
  it('Test Case #3', () => {
    const out = m_nums_sum(inputs[2][0], inputs[2][1]);
    expect(out).toBe(outputs[2]);
  });
  it('Test Case #4', () => {
    const out = m_nums_sum(inputs[3][0], inputs[3][1]);
    expect(out).toBe(outputs[3]);
  });
  it('Test Case #5', () => {
    const out = m_nums_sum(inputs[4][0], inputs[4][1]);
    expect(out).toBe(outputs[4]);
  });
});