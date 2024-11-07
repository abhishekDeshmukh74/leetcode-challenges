var fizzBuzz = function (n) {
  const output = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push('FizzBuzz');
    } else if (i % 3 === 0) {
      output.push('Fizz');
    } else if (i % 5 === 0) {
      output.push('Buzz');
    } else {
      output.push(`${i}`);
    }
  }
  return output;
};

var fizzBuzz = function (n) {
  const ans = [];

  const fizzBuzzDict = {
    3: "Fizz",
    5: "Buzz"
  };

  const divisors = Object.keys(fizzBuzzDict).map(Number);

  for (let num = 1; num <= n; num++) {
    let numAnsStr = "";

    for (let key of divisors) {
      if (num % key === 0) {
        numAnsStr += fizzBuzzDict[key];
      }
    }

    if (numAnsStr === "") {
      numAnsStr = num.toString();
    }

    ans.push(numAnsStr);
  }

  return ans;
}

console.log(fizzBuzz(3));
