var lemonadeChange = function (bills) {
    const wallet = [0, 0];

    for (const bill of bills) {
        switch (bill) {
            case 5:
                wallet[0]++;
                break;
            case 10:
                if (wallet[0] < 1) return false;
                wallet[0]--;
                wallet[1]++;
                break;
            case 20:
                if (wallet[1] > 0 && wallet[0] > 0) {
                    wallet[0]--;
                    wallet[1]--;
                } else if (wallet[0] >= 3) {
                    wallet[0] -= 3;
                } else {
                    return false;
                }
                break;
        }
    }
    return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 10, 10, 20]));
