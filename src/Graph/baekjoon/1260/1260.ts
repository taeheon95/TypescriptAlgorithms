function solution(N: number, M: number, V: number, arr: number[][]) {
  const visited = Array.from({ length: N + 1 }, (v, i) => false);
  const graph: number[][] = Array.from({ length: N + 1 }, (v, i) => {
    return Array.from({ length: N + 1 }, (v, j) => 0);
  });
  arr.forEach(v => {
    graph[v[0]][v[1]] = 1;
  });
  const dfs_ans = dfs(V, visited, graph);
  for (let i = 0; i < visited.length; i++) {
    visited[i] = false;
  }
  const bfs_ans = bfs(V, visited, graph);
  return [dfs_ans, bfs_ans];
}

function dfs(V: number, visited: boolean[], graph: number[][]) {
  let vertex: number | undefined = V;
  const ans: number[] = [];
  const stack: number[] = [vertex];
  while (stack.length > 0) {
    vertex = stack.pop();
    if (vertex) {
      ans.push(vertex);
      for (let i = 1; i < graph[vertex].length; i++) {
        if (graph[vertex][i] === 1 && visited[i] === false) {
          vertex = i;
          stack.push(i);
          visited[vertex] = true;
        }
      }
    }
  }
  return ans;
}

function bfs(V: number, visited: boolean[], graph: number[][]) {
  const ans: number[] = [];
  const queue: number[] = [];
  queue.push(V);
  visited[V] = true;
  while (queue.length > 0) {
    for (let i = 1; i < graph.length; i++) {
      if (i === queue[0]) continue;
      if (graph[queue[0]][i] === 1 && visited[i] === false) {
        visited[i] = true;
        queue.push(i);
      }
    }
    const [popNum] = queue.splice(0, 1);
    ans.push(popNum);
  }
  return ans;
}

export default solution;