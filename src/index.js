// You should implement your task here.

module.exports = function towelSort(matrix) {

    if (!(Array.isArray(matrix) && matrix.length)) {
        return [];
    }

    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {}
        if (i % 2 !== 0) {
            matrix[i].reverse();
        }

    }

    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {

            res.push(matrix[x][y]);
        }
    }
    return res;
}
