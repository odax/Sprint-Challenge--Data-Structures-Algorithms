class BinarySearchTree {
  //class will be used for each node
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
    //remember depth first goes straight down
    //this implementation starts with left and slowly moves to the right via recursion
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb);
    }
  }

  // populator(left, right, array) {
  //   //populator is primarily used for breadthFirstForEach()
  //   //it wlil populate an array children of specified node
  //   if (left && right) array.push(left.value, right.value);
  //   else if (left) array.push(left.value);
  //   else if (right) array.push(right.value);
  // }

breadthFirstForEach(cb) {
      // const nodes = [];
      // nodes.push(this.value);
      // let left = this.left;
      // let right = this.right;
   
      //   if (left && right) {
      //     this.populator(left.left, left.right, nodes);
      //     this.populator(right.left, right.right, nodes);
      //   } else if (left) {
      //     this.populator(left.left, left.right, nodes);
      //   }
      //     else if (right) {
      //       this.populator(right.left, right.right, nodes);
      //       if (!left && !right) return;
      // }
      // this.populator(this.left, this.right, nodes);
      // nodes.forEach(num => cb(num));
      const queue = [];
      queue.push(this);

      while(queue.length !== 0) {
        const node = queue.shift();
        cb(node.value);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
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