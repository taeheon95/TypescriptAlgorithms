import BinaryNode, { preorderTraverse, inorderTraverse, postorderTraverse } from './BinaryTree';

describe('이진 트리 깊이 우선 탐색', function() {
  const bt7 = new BinaryNode(7, null, null);
  const bt6 = new BinaryNode(6, null, null);
  const bt5 = new BinaryNode(5, null, null);
  const bt4 = new BinaryNode(4, null, null);
  const bt3 = new BinaryNode(3, bt6, bt7);
  const bt2 = new BinaryNode(2, bt4, bt5);
  const bt1 = new BinaryNode(1, bt2, bt3);

  it('전위 순회 출력', () => {
    const ans: number[] = [];
    preorderTraverse(bt1, ans);
    expect(ans).toStrictEqual([1, 2, 4, 5, 3, 6, 7]);
  });
  it('중위 순회 출력', () => {
    const ans: number[] = [];
    inorderTraverse(bt1, ans);
    expect(ans).toStrictEqual([4, 2, 5, 1, 6, 3, 7]);
  });
  it('후위 순회 출력', () => {
    const ans: number[] = [];
    postorderTraverse(bt1, ans);
    expect(ans).toStrictEqual([4, 5, 2, 6, 7, 3, 1]);
  });
});