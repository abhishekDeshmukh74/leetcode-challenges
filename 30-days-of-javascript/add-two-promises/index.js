// var addTwoPromises = async function (promise1, promise2) {
//     return new Promise(async (resolve, reject) => {
//         const value1 = await promise1
//         const value2 = await promise2
//         resolve(value1 + value2)
//     })
// };

var addTwoPromises = async function (promise1, promise2) {
    return await Promise.all([promise1, promise2]).then(
        ([val1, val2]) => val1 + val2
    );
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
