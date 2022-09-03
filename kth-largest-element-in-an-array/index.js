class MinHeap {
    constructor() {
        this.heap = [];
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChildIndex(index) {
        return 2 * index + 1;
    }

    rightChildIndex(index) {
        return 2 * index + 2;
    }
    swap(idx1, idx2) {
        const t = this.heap[idx1];
        this.heap[idx1] = this.heap[idx2];
        this.heap[idx2] = t;
    }

    insert(item) {
        this.heap.push(item);
        let index = this.heap.length - 1;
        let parentIndex = this.parentIndex(index);
        while (
            this.heap[index] !== undefined &&
            this.heap[parentIndex] !== undefined &&
            this.heap[index] < this.heap[parentIndex]
        ) {
            this.swap(index, parentIndex);
            index = this.parentIndex(index);
            parentIndex = this.parentIndex(index);
        }
    }

    // remove current root
    remove() {
        const item = this.heap.shift();
        this.heap.unshift(this.heap.pop());
        let currentIndex = 0;
        let leftIndex = 1;
        let rightIndex = 2;
        while (
            (this.heap[leftIndex] < this.heap[currentIndex] ||
                this.heap[rightIndex] < this.heap[currentIndex])
        ) {
            if (this.heap[leftIndex] < this.heap[currentIndex] && (this.heap[leftIndex] < this.heap[rightIndex] || this.heap[rightIndex] === undefined)) {
                this.swap(leftIndex, currentIndex);
                currentIndex = leftIndex;
            } else {
                this.swap(rightIndex, currentIndex);
                currentIndex = rightIndex;
            }
            leftIndex = this.leftChildIndex(currentIndex);
            rightIndex = this.rightChildIndex(currentIndex);
        }
        return item;
    }
}

var findKthLargest = function (nums, k) {
    const minHeap = new MinHeap()
    for (const num of nums) {
        minHeap.insert(num)
        if (minHeap.heap.length > k) {
            minHeap.remove()
        }
    }
    return minHeap.heap[0]
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
