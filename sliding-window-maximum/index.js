// TODO Brute force - Time complexity - O(nk)


// Heap - Time complexity - O(nlogn)
const {
    MaxPriorityQueue,
} = require('@datastructures-js/priority-queue')

var maxSlidingWindow = function (nums, k) {
    const maxHeap = new MaxPriorityQueue()
    const result = []

    for (let i = 0; i < nums.length; i++) {
        maxHeap.enqueue(i, nums[i])

        if (i + 1 >= k) { // when the window reach size k; from there after...
            let top = maxHeap.front()
            // if top is within the window, loop will be skipped and top will be pushed to result
            // else the loop will find the next top that is within the window and push that instead
            while (top.element <= i - k) { // index i-k is not in the window
                maxHeap.dequeue()
                top = maxHeap.front()
            }
            result.push(top.priority)
        }
    }
    return result
}

// To add an element in a heap of size k costs log⁡(k) so Let's use a deque (double-ended queue), the structure which pops from / pushes to either side with the same O(1) performance
// TODO  Dequeue - Time complexity - O(n)


// TODO  Dynamic programming - Time complexity - O(n)


console.log(maxSlidingWindow([1, -1], 1))
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
console.log(maxSlidingWindow([1], 1))
console.log(maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5))
