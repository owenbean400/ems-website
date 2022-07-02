import { BinaryNode } from "./BinaryNodes";

class BinarySearchTree<T> {
  root: BinaryNode<T>;

  constructor() {}

  insertNode(node: BinaryNode<T> | undefined, item: T) {
    if (node === undefined) return new BinaryNode(item);
    if (item < node.item)
    node.leftChild = this.insertNode(node.leftChild, item);
    else if (item > node.item)
    node.rightChild = this.insertNode(node.rightChild, item);
    else return node;
  }

  printTree(currPtr: BinaryNode<T> | undefined, indent: string, last: boolean) {
    if (currPtr != undefined) {
      console.log(indent);
      if (last) {
        console.log("R----");
        indent += "   ";
      } else {
        console.log("L----");
        indent += "|   ";
      }
      console.log(currPtr.item);
      this.printTree(currPtr.leftChild, indent, false);
      this.printTree(currPtr.rightChild, indent, true);
    }
  }

  search(node: BinaryNode<T> | undefined, item: T) {
    if (node == null) return null;
    else if (item == node.item) return node;
    else if (item < node.item) return this.search(node.leftChild, item);
    else return this.search(node.rightChild, item);
  }
}

export { BinarySearchTree }