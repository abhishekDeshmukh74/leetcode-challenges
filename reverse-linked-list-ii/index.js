function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

var reverseBetween = function (head, left, right) {
    const dummy = new ListNode(0, head)
    let leftPrev = dummy
    let current = head

    // reach node at position left
    for (let i = 0; i < left - 1; i++) {
        leftPrev = current
        current = current.next
    }

    // reverse from left to right
    let prev = null
    for (let i = 0; i < right - left + 1; i++) {
        const next = current.next
        current.next = prev
        prev = current
        current = next
    }

    // update pointers
    leftPrev.next.next = current // node after right
    leftPrev.next = prev // right
    return dummy.next
};

console.log(reverseBetween(node1, 2, 4))
