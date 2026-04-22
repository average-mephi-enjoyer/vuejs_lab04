"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class tNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new tNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode) {
        if (newNode.value < node.value)
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        else if (node.right === null)
            node.right = newNode;
        else
            this.insertNode(node.right, newNode);
    }
    search(value) {
        return this.searchNode(this.root, value);
    }
    searchNode(node, value) {
        if (node === null)
            return false;
        if (value === node.value)
            return true;
        if (value < node.value)
            return this.searchNode(node.left, value);
        return this.searchNode(node.right, value);
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(node, value) {
        if (node === null)
            return null;
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
            return node;
        }
        if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
            return node;
        }
        if (node.left === null)
            return node.right;
        if (node.right === null)
            return node.left;
        let minRight = node.right;
        while (minRight.left !== null)
            minRight = minRight.left;
        node.value = minRight.value;
        node.right = this.deleteNode(node.right, minRight.value);
        return node;
    }
    update(oldValue, newValue) {
        this.delete(oldValue);
        this.insert(newValue);
    }
    height() {
        return this.heightNode(this.root);
    }
    heightNode(node) {
        if (node === null)
            return 0;
        let leftHeight = this.heightNode(node.left);
        let rightHeight = this.heightNode(node.right);
        return 1 + Math.max(leftHeight, rightHeight);
    }
}
let bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log("Search 7:", bst.search(7));
console.log("Search 99:", bst.search(99));
console.log("Height:", bst.height());
bst.update(5, 6);
console.log("Search 5 after update:", bst.search(5));
console.log("Search 6 after update:", bst.search(6));
bst.delete(6);
console.log("Search 6 after delete:", bst.search(6));
