// Heap
const {
    MaxPriorityQueue,
} = require('@datastructures-js/priority-queue')

var minSetSize = function (arr) {
    const map = new Map()
    arr.forEach(n => map[n] ? map[n]++ : map[n] = 1)

    const maxHeap = new MaxPriorityQueue()
    for (const num in map) maxHeap.enqueue(Number(num), map[num])

    let count = 0
    let setCount = 0
    while (count < Math.floor(arr.length / 2)) {
        count += maxHeap.dequeue().priority
        setCount++
    }
    return setCount
}

// TODO: Bucket sort


console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]))
