import solution from './BinaryTreeBFS';
import BinaryNode from '../solution058/BinaryTree';

describe('이진트리 넓이 우선 탐색 출력', function() {
  const bt7 = new BinaryNode(7, null, null);
  const bt6 = new BinaryNode(6, null, null);
  const bt5 = new BinaryNode(5, null, null);
  const bt4 = new BinaryNode(4, null, null);
  const bt3 = new BinaryNode(3, bt6, bt7);
  const bt2 = new BinaryNode(2, bt4, bt5);
  const bt1 = new BinaryNode(1, bt2, bt3);

  it('test', () => {
    expect(solution(bt1)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});