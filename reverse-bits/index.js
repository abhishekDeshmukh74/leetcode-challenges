var reverseBits = function (n) {
    let result = 0
    for (let i = 0; i < 32; i++) {
        // shift the last bit of n to the left
        const bit = (n >> i) & 1

        // shift the last bit of n to the left and insert the reversed last bit of n into the result
        result = result | (bit << (31 - i))
    }
    // convert the result to an unsigned 32-bit integer
    return result >>> 0;
}

console.log(reverseBits(00000010100101000001111010011100))
console.log(reverseBits(11111111111111111111111111111101))
