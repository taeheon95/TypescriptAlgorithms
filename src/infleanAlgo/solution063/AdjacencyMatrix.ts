function getAdjSolution(input: string) {
  const [[N, M], ...edges] = input.trim().split('\r\n').map(line => {
    return line.trim().split(' ').map(v => Number(v));
  });

  return adjacencyMatrix(N, M, edges);
}

function getAns(output: string) {
  return output.trim().split('\r\n').map(line => {
    return line.trim().split(' ').map(v => Number(v));
  });
}

function adjacencyMatrix(N: number, M: number, edges: number[][]) {
  const arr = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));
  edges.forEach(v => {
    arr[v[0] - 1][v[1] - 1] = v[2];
  });
  return arr;
}

export { getAdjSolution, getAns };