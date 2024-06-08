
var TimeMap = function () {
    this.store = new Map()
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.store.has(key)) this.store.set(key, [])
    this.store.get(key).push([value, timestamp])
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */

TimeMap.prototype.get = function (key, timestamp) {
    const items = this.store.get(key);
    if (!items || timestamp < items[0][1]) return '';

    let left = 0
    let right = items.length - 1
    let result = '';

    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2)
        if (items[middle][1] === timestamp) return items[middle][0]
        if (items[middle][1] < timestamp) {
            result = items[middle][0]
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return result
};


const timeMap = new TimeMap()
console.log(timeMap.set("foo", "bar", 1))
console.log(timeMap.get("foo", 1))
console.log(timeMap.get("foo", 3))
console.log(timeMap.set("foo", "bar2", 4))
console.log(timeMap.get("foo", 4))
console.log(timeMap.get("foo", 5))
