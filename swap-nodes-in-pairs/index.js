function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const root1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
root1.next = node2;
node2.next = node3;

var swapPairs = function (head) {
    let dummy = new ListNode(0, head)
    let prev = dummy
    let current = head

    while (current && current.next) {
        const nextPair = current.next.next
        const second = current.next

        // reverse pair
        second.next = current // Makes the second node point to the first node.
        current.next = nextPair // Connects the first node to the next pair
        prev.next = second // Connects the previous part of the list to the new head of this swapped pair

        prev = current
        current = nextPair
    }
    return dummy.next
};

console.log(swapPairs(root1))
