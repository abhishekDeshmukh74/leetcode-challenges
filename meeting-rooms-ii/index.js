var minMeetingRooms = function (intervals) {

    const startMap = new Map();
    const endMap = new Map();
    let minStart = Infinity;
    let maxStop = -Infinity;

    for (const [start, end] of intervals) {
        startMap[start] ? startMap[start]++ : startMap[start] = 1;
        endMap[end] ? endMap[end]++ : endMap[end] = 1;

        if (start < minStart) minStart = start;
        if (start > maxStop) maxStop = end;
    }

    let minCount = 0;
    let currentCount = 0
    for (let i = minStart; i <= maxStop; i++) {
        const strI = String(i)
        if (startMap[strI]) currentCount += startMap[strI]

        if (endMap[strI]) currentCount -= endMap[strI]

        if (currentCount > minCount) minCount = currentCount
    }
    return minCount
};

console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]]))
console.log(minMeetingRooms([[13, 15], [1, 13]]))
console.log(minMeetingRooms([[9, 10], [4, 9], [4, 17]]))
console.log(minMeetingRooms([[7, 10], [2, 4]]))
