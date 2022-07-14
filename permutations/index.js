var permute = function (nums) {
  if (nums?.length === 0) return [[]];

  const [first, ...rest] = nums;
  const permutationsWithoutFirst = permute(rest);

  const allPermutations = [];

  for (let i = 0; i < permutationsWithoutFirst.length; i++) {
    for (let j = 0; j <= permutationsWithoutFirst[i].length; j++) {
      const permWithFirst = [
        ...permutationsWithoutFirst[i].slice(0, j),
        first,
        ...permutationsWithoutFirst[i].slice(j),
      ];
      allPermutations.push(permWithFirst);
    }
  }
  return allPermutations;
};

console.log(permute([1, 2, 3]));
