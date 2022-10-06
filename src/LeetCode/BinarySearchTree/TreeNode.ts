// @ts-ignore
class TreeNode {
  val: number;
  // @ts-ignore
  left: TreeNode | null;
  // @ts-ignore
  right: TreeNode | null;

  // @ts-ignore
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}


export { TreeNode };