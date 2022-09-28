import TreeNode from './TreeNode';

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];

  const nodeArr: TreeNode[][] = [[root]];

  let i = 0;
  while (i < nodeArr.length) {
    for (let j = 0; j < nodeArr[i].length; j++) {
      if (nodeArr[i][j].left !== null) {
        if (nodeArr.length === i + 1) {
          nodeArr.push([]);
        }
        nodeArr[i + 1].push(nodeArr[i][j].left!);
      }
      if (nodeArr[i][j].right) {
        if (nodeArr.length === i + 1) {
          nodeArr.push([]);
        }
        nodeArr[i + 1].push(nodeArr[i][j].right!);
      }
    }
    i++
  }

  return nodeArr.map((nodeList)=>{
    return nodeList.map(node=>node.val);
  });
}

export default levelOrder;