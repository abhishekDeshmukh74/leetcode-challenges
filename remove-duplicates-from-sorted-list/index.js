function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node1 = new ListNode(1);
const node11 = new ListNode(1);
const node2 = new ListNode(2);
node1.next = node11;
node11.next = node2;

var deleteDuplicates = function (head) {
  let current = head;

  while (current) {
    while (current.next && current.next.val === current.val) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  return head;
};

console.log(deleteDuplicates(node1));
