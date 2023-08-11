// map is used to optimize insertion than array
var join = function (arr1, arr2) {
    const result = {};

    // 1. initialization
    arr1.forEach(item => {
        result[item.id] = item;
    });
    // 2. joining
    arr2.forEach(item => {
        if (result[item.id]) {
            Object.keys(item).forEach(key => {
                result[item.id][key] = item[key];
            });
        } else {
            result[item.id] = item;
        }
    });

    return Object.values(result);
};

console.log(
    join([
        { "id": 1, "x": 1 },
        { "id": 2, "x": 9 }
    ], [
        { "id": 3, "x": 5 }
    ])
)
