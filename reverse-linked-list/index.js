// use prev, current, next variables to keep track of linked list nodes while iterating
var reverseList = function (head) {
  let current = head;
  let prev = null;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

console.log(reverseList(head));
