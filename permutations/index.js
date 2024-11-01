// Time complexity of the `permute` function is O(N * N!)
var permute = function (nums) {
  const answer = []
  const counter = []

  const dfs = (i, arr) => {

    if (arr.length === nums.length) {
      answer.push([...arr])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (counter[i]) continue;

      counter[i] = true
      arr.push(nums[i])
      dfs(i + 1, arr, counter)
      counter[i] = false
      arr.pop()
    }
  }

  dfs(0, [], counter)
  return answer
};

console.log(permute([1, 2, 3]));
