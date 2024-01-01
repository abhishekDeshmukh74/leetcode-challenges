var minimizedStringLength = function(s) {
    return new Set(s).size;   
};

console.log(minimizedStringLength('aaabc'));
console.log(minimizedStringLength('cbbd'));
console.log(minimizedStringLength('dddaaa'));

