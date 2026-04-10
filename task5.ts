class tNode {
    value: number;
    left: tNode | null;
    right: tNode | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    private root: tNode | null;
  
    constructor() {
      this.root = null;
    }
  
    insert(value: number): void {
      let newNode = new tNode(value);
      if (this.root === null) {
        this.root = newNode;
        return;
      }
      this.insertNode(this.root, newNode);
    }
  
    private insertNode(node: tNode, newNode: tNode): void {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
}
   