import BinaryNode from '../solution058/BinaryTree';

function binaryTreeBFS(tree: BinaryNode) {
  const queue: BinaryNode[] = [];
  const ans: number[] = [];
  queue.push(tree);
  while (queue.length > 0) {
    ans.push(queue[0].data);
    queue[0].left && queue.push(queue[0].left);
    queue[0].right && queue.push(queue[0].right);
    queue.splice(0, 1);
  }

  return ans;
}

export default binaryTreeBFS;