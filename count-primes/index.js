var countPrimes = function (n) {
  const primes = Array(n).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (!primes[i]) continue;
    for (let j = i * i; j < n; j += i) primes[j] = false;
  }
  return primes.filter((num) => num).length;
};
console.log(countPrimes(10));
