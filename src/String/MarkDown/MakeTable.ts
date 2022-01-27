function makeTable(tableText: string) {
  const [header, arrangeData, ...rows] = divideTable(tableText);
  const tableArrange = makeTableArrange(arrangeData);
  const tableHeader = makeTableHead(header, tableArrange);
  const tableBody = makeTableBody(rows, tableArrange);
  const table = `<table>${tableHeader}${tableBody}</table>`;
  return table;
}

function divideTable(tableText: string): string[][] {
  return tableText
    .split(/\n/g)
    .map((tableText: string): string[] =>
      tableText.split(/\|/g).slice(1, -1),
    );
}

function makeTableArrange(arrangeData: string[]): string[] {
  return arrangeData.map((data: string): string =>
    data
      .replace(/^:-*:$/g, 'center')
      .replace(/^:-*/g, 'left')
      .replace(/-*:$/g, 'right')
      .replace(/-*/g, ''),
  );
}

function makeTableHead(headTextList: string[], tableArrange: string[]): string {
  return '' +
    '<thead>' +
    '<tr>' +
    headTextList
      .map((headerText: string, index: number) => {
        return `<th style='text-align: ${tableArrange[index]}'>${headerText}</th>`;
      })
      .join('') +
    '</tr>' +
    '</thead>';
}

function makeTableBody(tableRows: string[][], tableArrarge: string[]) {
  return '' +
    '<tbody>' +
    tableRows.map((row) => {
      return '' +
        '<tr>' +
        row.map((tableData, index) => {
          return '' +
            `<td style='text-align: ${tableArrarge[index]}'>` +
            tableData +
            '</td>';
        }).join('') +
        '</tr>';
    }).join('') +
    '</tbody>';
}

export default makeTable;
