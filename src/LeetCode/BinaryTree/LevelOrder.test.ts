import levelOrder from './LevelOrder';
import TreeNode from './TreeNode';

describe('level order test', () => {
  it('case 1', () => {
    const exp = [[3], [9, 20], [15, 7]];
    const root = new TreeNode(3);
    const node1 = new TreeNode(9);
    const node2 = new TreeNode(20);
    const node3 = new TreeNode(15);
    const node4 = new TreeNode(7);
    root.left = node1;
    root.right = node2;
    node2.left = node3;
    node2.right = node4;
    const ans = levelOrder(root);

    expect(ans).toStrictEqual(exp);
  });
});