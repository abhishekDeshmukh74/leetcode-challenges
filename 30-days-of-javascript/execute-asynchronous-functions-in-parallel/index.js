var promiseAll = async function (functions) {
    return new Promise((resolve, reject) => {
        const result = new Array(functions.length)
        let count = 0
        for (let i = 0; i < functions.length; i++) {
            functions[i]().then((val) => {
                count++;
                result[i] = val;
                if (count === functions.length) resolve(result);
            })
                .catch((error) => {
                    reject(error)
                })
        }
    })
};

const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log); // [42]
