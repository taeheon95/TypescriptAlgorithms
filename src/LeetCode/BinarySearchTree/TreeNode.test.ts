import { TreeNode } from './TreeNode';
import { isValidBST } from './IsValidNode';

describe('isValidBST', () => {
  it('case # 1', () => {
    let tNode5: TreeNode = new TreeNode(7);
    let tNode4: TreeNode = new TreeNode(3);
    let tNode3: TreeNode = new TreeNode(6, tNode4, tNode5);
    let tNode2: TreeNode = new TreeNode(4, null, null);
    let tNode1: TreeNode = new TreeNode(5, tNode2, tNode3);

    expect(isValidBST(tNode1)).toBe(false);
  });
});