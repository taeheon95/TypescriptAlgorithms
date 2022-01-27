function makeParagraph(paragraphText: string) {
  return paragraphText.replace(/\n/g, '<br/>')
    // bold
    .replace(/\*\*(.+)\*\*/g, '<span style=\'font-weight:bold\'>$1</span>')
    // itallic
    .replace(/\*(.+)\*/g, '<span style=\'font-style:italic\'>$1</span>')
    .replace(/_(.+)_/g, '<span style=\'font-style:italic\'>$1</span>')
    // 취소선
    .replace(/~~(.+)~~/g, '<span style=\'text-decoration:line-through\'>$1</span>')
    // 링크 to-> a tag
    .replace(/(http|https):\/\/(.*)/g, '<a href=\'$&\'>$&</a>')
    // 사진
    .replace(/\!\[(.+)\]\((.*)\)/g, '<img src=\'$2\' alt="$1"/>')
    // 링크 이름 변경
    .replace(
      /\[(.+)\]\((.*)\)/g,
      (str, p1, p2) => `<a href='${p2}'>${p1}</a>`,
    );
}

function paragraph(paragraphText: string): string {
  const splitParagraph = paragraphText.split(/\n/g);
  const p = splitParagraph.map(line => {
    const linkElementRegEx = /^(\!?)\[(.*)\]\((.*)\)$/g;
    if (linkElementRegEx.test(line)) {
      return line.replace(linkElementRegEx, (str, p1, p2, p3) => {
        return p1
          ? `<img src='${p3}' alt='${p2}'/>`
          : `<a href='${p3}'>${p2}</a>`;
      });
    } else {
      const regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g;
      if (regex.test(line)) {
        return `<a href='${line}'>${line}</a>`;
      } else {
        return line
          // bold
          .replace(/\*\*(.+)\*\*/g, '<span style=\'font-weight:bold\'>$1</span>')
          // itallic
          .replace(/\*(.+)\*/g, '<span style=\'font-style:italic\'>$1</span>')
          .replace(/_(.+)_/g, '<span style=\'font-style:italic\'>$1</span>')
          // 취소선
          .replace(/~~(.+)~~/g, '<span style=\'text-decoration:line-through\'>$1</span>');
      }
    }
  }).join('<br/>');
  return `<p>${p}</p>`;
}

export default paragraph;