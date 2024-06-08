function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const root1 = new ListNode(2);
const node4_1 = new ListNode(4);
const node3 = new ListNode(3);
root1.next = node4_1;
node4_1.next = node3;

const root2 = new ListNode(5);
const node6 = new ListNode(6);
const node4_2 = new ListNode(4);
root2.next = node6;
node6.next = node4_2;

const root9_1 = new ListNode(9);
const node9_2 = new ListNode(9);
const node9_3 = new ListNode(9);
const node9_4 = new ListNode(9);
const node9_5 = new ListNode(9);
const node9_6 = new ListNode(9);
const node9_7 = new ListNode(9);
root9_1.next = node9_2;
node9_2.next = node9_3;
node9_3.next = node9_4;
node9_4.next = node9_5;
node9_5.next = node9_6;
node9_6.next = node9_7;

const root9_21 = new ListNode(9);
const node9_22 = new ListNode(9);
const node9_23 = new ListNode(9);
const node9_24 = new ListNode(9);
root9_21.next = node9_22;
node9_22.next = node9_23;
node9_23.next = node9_24;

const addTwoNumbers = (l1, l2) => {
    const dummy = new ListNode();
    let current = dummy;
    let carry = 0;
    while (l1 || l2 || carry) {
        const v1 = l1 === null ? 0 : l1.val;
        const v2 = l2 === null ? 0 : l2.val;

        const sum = v1 + v2 + carry;
        carry = Math.trunc(sum / 10);
        current.next = new ListNode(sum % 10);

        current = current.next;
        l1 = l1 === null ? null : l1.next
        l2 = l2 === null ? null : l2.next
    }
    return dummy.next;
};

console.log(addTwoNumbers(root1, root2));
console.log(addTwoNumbers(root9_1, root9_21));
