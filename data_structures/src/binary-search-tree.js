class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /*depthFirstForEach(cb) receives a callback function as a parameter. This method iterates over the binary 
  search tree in depth-first order, applying the supplied callback function to each tree element in turn.

  breadthFirstForEach(cb) receives a callback function as a parameter. This method iterates over the binary 
  search tree in breadth-first order, applying the supplied callback function to each tree element in turn.*
  */

  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb);
    }
    if (this.right) {
      the.right.depthFirstForEach(cb);
    }
  }

breadthFirstForEach(cb) {
      const nodes = [];
      nodes.push(this.value);
      let left = this.left;
      let right = this.right;
      function populator(left, right) {
        if (left && right) nodes.push(left.value, right.value);
        else if (left) nodes.push(left.value);
        else if (right) nodes.push(right.value);
   
        if (left && right) {
          populator(left.left, left.right);
          populator(right.left, right.right);
        } else if (left) populator(left.left, left.right);
        else if (right) populator(right.left, right.right);
        if (!left && !right) return;
      }
      populator(this.left, this.right);
      nodes.forEach(num => cb(num));
     }
}

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;