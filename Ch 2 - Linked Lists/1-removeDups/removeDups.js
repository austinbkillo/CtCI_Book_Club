// Write code to remove duplicates from an unsorted linked list.

// Follow up: To reduce space complexity How would you solve this problem if a temporary buffer is not allowed? What does this do to time complexity?

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/

function removeDups(head) {
  // solution
  const storage = {};
  let prev = null;
  let current = head;
  while (current) {
    if (storage[current.val]) {
      prev.next = current.next;
    } else {
      storage[current.val] = 1;
      prev = current;
    }

    current = current.next;
  }
  return head;
}

module.exports = removeDups;
