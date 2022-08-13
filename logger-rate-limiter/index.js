var Logger = function () {
    this.data = {}
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
    if (!(message in this.data)) {
        this.data[message] = timestamp + 10
        return true
    }

    if (timestamp < this.data[message]) return false
    this.data[message] = timestamp + 10
    return true

};


var logger = new Logger()
console.log(logger.shouldPrintMessage(1, 'foo'));   // return true, next allowed timestamp for 'foo' is 1 + 10 = 11
console.log(logger.shouldPrintMessage(2, 'bar'));   // return true, next allowed timestamp for 'bar' is 2 + 10 = 12
console.log(logger.shouldPrintMessage(3, 'foo'));   // 3 < 11, return false
console.log(logger.shouldPrintMessage(8, 'bar'));   // 8 < 12, return false
console.log(logger.shouldPrintMessage(10, 'foo'));  // 10 < 11, return false
console.log(logger.shouldPrintMessage(11, 'foo'));  // 11 >= 11, return true, next allowed timestamp for 'foo' is 11 + 10 = 21
