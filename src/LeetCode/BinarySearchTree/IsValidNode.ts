// @ts-ignore
import { TreeNode } from './TreeNode';

function isValidBST(root: TreeNode | null): boolean {
  if (root === null) return true;
  const { left, right, val } = root;

  if (left !== null && right !== null) {
    // @ts-ignore
    const leftMax = getMax(root.left);
    // @ts-ignore
    const rightMin = getMin(root.right);
    return leftMax < val && rightMin > val
      ? isValidBST(left) && isValidBST(right)
      : false;
  } else if (left !== null) {
    // @ts-ignore
    const leftMax = getMax(root.left);
    return leftMax < val ? isValidBST(left) : false;
  } else if (right !== null) {
    // @ts-ignore
    const rightMax = getMin(root.right);
    return rightMax > val ? isValidBST(right) : false;
  } else {
    return true;
  }
}

function getMax(node: TreeNode): number {
  if (node.right === null) {
    return node.val;
  }
  return getMax(node.right);
}

function getMin(node: TreeNode): number {
  if (node.left === null) {
    return node.val;
  }
  return getMin(node.left);
}

export {isValidBST};