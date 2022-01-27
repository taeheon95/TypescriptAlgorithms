import paragraph from './MakeParagraph';

describe('마크다운 문단 생성기 함수 테스트', () => {
  describe('마크다운 문장 검사기', () => {
    it('이미지 테스트', () => {
      const testString = '![네이버](https://www.naver.com)';
      const p = paragraph(testString);
      expect(p).toBe(`<p><img src='https://www.naver.com' alt='네이버'/></p>`);
    });
    it('링크 테스트 1', () => {
      const testString = '[네이버](https://www.naver.com)';
      const p = paragraph(testString);
      expect(p).toBe(`<p><a href='https://www.naver.com'>네이버</a></p>`);
    });
    it('링크 테스트 2', () => {
      const testString = 'https://www.naver.com';
      const p = paragraph(testString);
      expect(p).toBe(`<p><a href='${testString}'>${testString}</a></p>`);
    });
    it('문장 테스트 bold', () => {
      const testString = '**test**';
      const p = paragraph(testString);
      expect(p).toBe(`<p><span style='font-weight:bold'>test</span></p>`);
    });
    it('문장 테스트 itallic1', () => {
      const testString = '*test*';
      const p = paragraph(testString);
      expect(p).toBe(`<p><span style='font-style:italic'>test</span></p>`);
    });
    it('문장 테스트 itallic2', () => {
      const testString = '_test_';
      const p = paragraph(testString);
      expect(p).toBe(`<p><span style='font-style:italic'>test</span></p>`);
    });
    it('취소선 테스트', () => {
      const testString = '~~test~~';
      const p = paragraph(testString);
      expect(p).toBe(`<p><span style='text-decoration:line-through'>test</span></p>`);
    });
    it('* 세개 테스트', () => {
      const testString = '***test***';
      const p = paragraph(testString);
      expect(p).toBe(`<p><span style='font-weight:bold'><span style='font-style:italic'>test</span></span></p>`);
    });
  });
  describe('복잡한 문단 테스트 하기', () => {
    it('링크 여러개인 문단 테스트', () => {
      const testString = '![네이버](https://www.naver.com)' +
        '\n' +
        '[네이버](https://www.naver.com)' +
        '\n' +
        'https://www.naver.com';
      const p = paragraph(testString);
      expect(p).toBe(`<p><img src='https://www.naver.com' alt='네이버'/><br/><a href='https://www.naver.com'>네이버</a><br/><a href='https://www.naver.com'>https://www.naver.com</a></p>`);
    });
    it('문단 내에 효과가 여러 개인 문단 테스트', () => {
      const testString = '_안녕하신가_\n' +
        '내 이름을 묻는다면\n' +
        '대답해주는게 인지상정\n' +
        '내 이름은 **여태헌**\n' +
        '너의 이름은 ~~홍길동~~ 인가?\n' +
        '아니면 너의 이름은 무엇이냐';
      const p = paragraph(testString);
      expect(p).toBe(`<p><span style='font-style:italic'>안녕하신가</span><br/>내 이름을 묻는다면<br/>대답해주는게 인지상정<br/>내 이름은 <span style='font-weight:bold'>여태헌</span><br/>너의 이름은 <span style='text-decoration:line-through'>홍길동</span> 인가?<br/>아니면 너의 이름은 무엇이냐</p>`);
    });
    it('문단 내에서 링크 이미지 문장 효과가 여러개 들어간 문단', () => {
    });

  });
});