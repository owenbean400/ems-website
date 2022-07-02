class BinaryNode<Element> {
  item: Element;
  leftChild: BinaryNode<Element> | undefined;
  rightChild: BinaryNode<Element> | undefined;
  constructor(item: Element) {
    this.leftChild = undefined;
    this.rightChild = undefined;
    this.item = item;
  }
}

export { BinaryNode }