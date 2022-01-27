import makeTable from './MakeTable';

describe('마크다운 table 생성기 함수 테스트', () => {
  const tableText: string =
    '|제목|내용|설명|\n' +
    '|:---|---:|:---:|\n' +
    '|왼쪽정렬|오른쪽정렬|중앙정렬|\n' +
    '|왼쪽정렬|오른쪽정렬|중앙정렬|\n' +
    '|왼쪽정렬|오른쪽정렬|중앙정렬|';
  it('테이블 테스트', () => {
    const makedText: string = makeTable(tableText);
    expect(makedText).toBe('<table><thead><tr><th style=\'text-align: left\'>제목</th><th style=\'text-align: right\'>내용</th><th style=\'text-align: center\'>설명</th></tr></thead><tbody><tr><td style=\'text-align: left\'>왼쪽정렬</td><td style=\'text-align: right\'>오른쪽정렬</td><td style=\'text-align: center\'>중앙정렬</td></tr><tr><td style=\'text-align: left\'>왼쪽정렬</td><td style=\'text-align: right\'>오른쪽정렬</td><td style=\'text-align: center\'>중앙정렬</td></tr><tr><td style=\'text-align: left\'>왼쪽정렬</td><td style=\'text-align: right\'>오른쪽정렬</td><td style=\'text-align: center\'>중앙정렬</td></tr></tbody></table>');
  });
});