import { TreeNode } from './TreeNode';

function lowestCommonAncestor(
  root: TreeNode | null, p: TreeNode | null, q: TreeNode | null,
): TreeNode | null {
  // @ts-ignore
  if (!root) return root;

  // @ts-ignore
  if (p.val <= root.val && q.val >= root.val) return root;
  // @ts-ignore
  if (p.val >= root.val && q.val <= root.val) return root;

  return lowestCommonAncestor(root.left, p, q) || lowestCommonAncestor(root.right, p, q);
}