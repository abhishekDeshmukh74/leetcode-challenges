function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next;
}

const node11 = new ListNode(1)
const node12 = new ListNode(2)
const node14 = new ListNode(4)
node11.next = node12
node12.next = node14

const node21 = new ListNode(1)
const node23 = new ListNode(3)
const node24 = new ListNode(4)
node21.next = node23
node23.next = node24

var mergeTwoLists = function (list1, list2) {
  const dummyNode = new ListNode();
  let current = dummyNode;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  if (list1) current.next = list1;
  if (list2) current.next = list2;

  return dummyNode.next;
};

console.log(mergeTwoLists(node11, node21));
