class BinaryNode {
  constructor(private readonly _data: number, private _left: BinaryNode | null | undefined, private _right: BinaryNode | null | undefined) {
    this._data = _data ?? 0;
    this._left = _left;
    this._right = _right;
  }

  get left() {
    return this._left ?? null;
  }

  set left(left: BinaryNode | null) {
    this._left = left;
  }

  get right() {
    return this._right ?? null;
  }

  set right(right: BinaryNode | null) {
    this._right = right;
  }

  get data() {
    return this._data;
  }

  set data(data: number) {
    this.data = data;
  }
}

const preorderTraverse = (node: BinaryNode, arr: number[]) => {
  arr.push(node.data);
  node.left && preorderTraverse(node.left, arr);
  node.right && preorderTraverse(node.right, arr);
};
const postorderTraverse = (node: BinaryNode, arr: number[]) => {
  node.left && postorderTraverse(node.left, arr);
  node.right && postorderTraverse(node.right, arr);
  arr.push(node.data);
};
const inorderTraverse = (node: BinaryNode, arr: number[]) => {
  node.left && inorderTraverse(node.left, arr);
  arr.push(node.data);
  node.right && inorderTraverse(node.right, arr);
};


export default BinaryNode;
export { preorderTraverse, postorderTraverse, inorderTraverse };