var minAreaRect = function (points) {
    const map = {};
    for (const [x, y] of points) {
        if (!map[x]) map[x] = new Set();
        map[x].add(y)
    }

    let minArea = Infinity

    for (let i = 0; i < points.length; i++) {

        for (let j = 0; j < points.length; j++) {

            if (points[i][0] === points[j][0] || points[i][1] === points[j][1]) continue;

            if (map[points[j][0]].has(points[i][1]) && map[points[i][0]].has(points[j][1])) {
                const currentArea = Math.abs(points[j][0] - points[i][0]) * Math.abs(points[j][1] - points[i][1])
                minArea = Math.min(currentArea, minArea);
            }
        }
    }
    return minArea === Infinity ? 0 : minArea
};

console.log(minAreaRect([[1, 1], [1, 3], [3, 1], [3, 3], [4, 1], [4, 3]]))
