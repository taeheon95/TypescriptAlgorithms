namespace NaryTree {
  class Node {
    val: number;
    children: Node[];

    constructor(val?: number) {
      this.val = val ?? 0;
      this.children = [];
    }
  }

  function preorder(root: Node | null): number[] {
    const ans: number[] = [];
    root && preorderTraverse(root, ans);
    return ans;
  }

  function preorderTraverse(node: Node, arr: number[]) {
    arr.push(node.val);
    for (let i = 0; i < node.children.length; i++) {
      preorderTraverse(node.children[i], arr);
    }
  }

  function levelOrder(root: Node | null): number[][] {
    if (root) {
      const queue: Node[][] = [[root]];
      const ans: number[][] = [];
      for (let i = 0; i < queue.length; i++) {
        let temp: Node[] = [];
        for (let j = 0; j < queue[i].length; j++) {
          temp = [...temp, ...queue[i][j].children];
        }
        if (temp.length > 0) {
          queue.push(temp);
        }
      }
      return queue.map(nodes => {
        return nodes.map(node => node.val);
      });
    }
    return [];
  }
}