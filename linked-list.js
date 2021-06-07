/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      this.length = 0;
    } else {
    this.tail.next = newNode;
    this.tail = newNode;
    }
    this.length += 1;
  }


  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.tail = newNode
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

/*
Removing from the end of a singly linked list is not constant time. To remove the last node, we don't have a way of setting the tail to be the node preceding the current tail. We need to fully traverse the list until we find what is right before the tail. 
*/

// Remove & return tail value. Throws error if list is empty.

  pop() {
    if(this.head = null){
      throw "List is empty";
    }

    let prev = this._get(this.length - 2);
    
    console.log("prev", prev); //this is coming back as null
    let val = prev.next.val
    prev.next = null;
    this.tail = prev;
    this.length -= 1;
    return val;
  }

  _get(idx) {
    let cur = this.head;
    let count = 0;

    while (cur !== null && count != idx) {
      count += 1;
      cur = cur.next;
    }

    return cur;
  }

  /** shift(): return & remove first item. */

  shift() {
    let firstNode = this.head.val;
    this.head = this.head.next
    this.length -= 1;
    if (this.length < 2) this.tail = this.head;
    return firstNode;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
  //traverse
    let currentNode = this.head;
    let count = 0;
    while(count != idx){
      currentNode = currentNode.next
      count ++;
    } return currentNode.val;
  }

  //ignore for the moment
  // getNodeAt(idx) {
  //   let currentNode = this.head;
  //   let count = 0;
  //   while(currentNode){
  //     if(count === idx){
  //       return currentNode
  //     }
  //     currentNode = currentNode.next
  //     count ++;
  //   }
  // }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    //traverse
    let currentNode = this.head;
    let count = 0;
    while(count != idx){
      currentNode = currentNode.next
      count ++;
    } currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */
  // Insert a new node at position idx with value val. Throws error if index is invalid. Returns undefined.

  insertAt(idx, val) {
    if(idx < 0 || idx > this.length){
      throw "Index is not valid";
    }

    if(idx === 0){
      return this.unshift(val)
    }
    if(idx === this.length){
      return this.push(val);
    }

    const newNode = new Node(val);
    //traverse
    let currentNode = this.head;
    let count = 0;
    let precedingNode;
    while(count != idx){
      currentNode = currentNode.next
      count ++;
      if(count === idx-1){
        precedingNode = currentNode;
      }
    }
    newNode.next = currentNode;
    precedingNode.next = newNode;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */
  // Remove & return value at position idx. Throws error if index is invalid.

  removeAt(idx) {
    if(idx < 0 || idx > this.length){
      throw "Index is not valid";
    }

    if(idx === 0){
      return this.shift();
    }
    if(idx === this.length - 1){
      return this.pop();
    }
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    //traverse
    let currentNode = this.head;
    let count = 0;
    let nodePrecedingIdx;
    let idxNode;
    while(count != idx+1){
      if(count === idx-1){
        nodePrecedingIdx = currentNode;
      }
      if(count===idx){
        idxNode = currentNode;
      }
      currentNode = currentNode.next;
      count += 1;
    }
    idxNode.val = null;
    nodePrecedingIdx.next = currentNode;
    this.length -= 1;

  }

  /** average(): return an average of all values in the list */

  average() {
        if(!this.head){
          return 0;
        }
        //traverse
        let currentNode = this.head;
        let total = 0;
        let count = 0;
        while(currentNode){
          count++;
          total += currentNode.val
          currentNode = currentNode.next
        }
        return total/count;
  }
}

module.exports = LinkedList;
