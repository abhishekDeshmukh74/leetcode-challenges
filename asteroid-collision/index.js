var asteroidCollision = function (asteroids) {
    const stack = []
    for (let asteroid of asteroids) {
        while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
            const diff = asteroid + stack[stack.length - 1]

            if (diff < 0) {
                stack.pop()
            } else if (diff > 0) {
                asteroid = 0
            } else {
                asteroid = 0
                stack.pop()
            }
        }
        if (asteroid) stack.push(asteroid)
    }
    return stack
};

console.log(asteroidCollision([5, 10, -5]))
console.log(asteroidCollision([8, -8]))
console.log(asteroidCollision([10, 2, -5]))
