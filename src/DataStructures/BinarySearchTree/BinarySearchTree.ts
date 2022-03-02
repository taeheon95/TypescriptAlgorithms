class TreeNode<T> {
  value: T;
  parent: TreeNode<T> | null;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T, parent: TreeNode<T> | null) {
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T> {
  root: TreeNode<T> | null;
  constructor(root: TreeNode<T> | null) {
    this.root = root;
  }

  isRight(node: TreeNode<T>): boolean {
    return node === node.parent?.right;
  }

  isEmpty(): boolean {
    return this.root === null;
  }

  __insert(value: T): void {
    const newNode: TreeNode<T> = new TreeNode(value, null);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      let parentNode = this.root;
      while (true) {
        if (parentNode && value < parentNode?.value) {
          if (parentNode.left === null) {
            parentNode.left = newNode;
            break;
          } else {
            parentNode = parentNode.left;
          }
        } else {
          if (parentNode && parentNode.right === null) {
            parentNode.right = newNode;
            break;
          } else if (parentNode) {
            parentNode = parentNode?.right;
          }
        }
        newNode.parent = parentNode;
      }
    }
  }

  insert(value: T[]) {
    value.forEach(value => this.__insert(value));
    return this;
  }

  search(value: T) {
    if (this.isEmpty()) {
      new Error('Tree is Empty!');
    } else {
      let node = this.root;
      while (node !== null && node.value !== value) {
        node = node.value > value ? node.left : node.right;
      }
      return node;
    }
  }

  getMax(node: TreeNode<T> | null = null) {}
  getMin(node: TreeNode<T> | null = null) {}
  remove(value: T) {}
  preorderTraverse(node: TreeNode<T>) {}
  traversalTree(traversalFunction: Function | null = null) {}
  inorder(arr: T[], node: TreeNode<T>) {}
  findKthSmllest(k: number, node: TreeNode<T>) {}
}
