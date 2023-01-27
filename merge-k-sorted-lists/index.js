function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head1 = new ListNode(1);
const node14 = new ListNode(4);
const node15 = new ListNode(5);
head1.next = node14;
node14.next = node15;

const head2 = new ListNode(1);
const node23 = new ListNode(3);
const node24 = new ListNode(4);
head2.next = node23;
node23.next = node24;

const head3 = new ListNode(2);
const node36 = new ListNode(6);
head3.next = node36;

const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

var mergeKLists = function (lists) {
  const dummy = new ListNode(0);
  let current = dummy;
  const minHeap = new MinPriorityQueue();

  for (let i = 0; i < lists.length; i++) {
    if (!lists[i]) continue;
    minHeap.enqueue(lists[i], lists[i].val);
  }

  while (minHeap.size() !== 0) {
    const min = minHeap.dequeue();

    current.next = new ListNode(min.priority);
    current = current.next;

    if (!min.element.next) continue;
    minHeap.enqueue(min.element.next, min.element.next.val);
  }
  return dummy.next;
};

console.dir(mergeKLists([head1, head2, head3]), { depth: null });
