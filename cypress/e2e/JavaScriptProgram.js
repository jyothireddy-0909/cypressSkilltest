let grid = [['x', 'c', 'a'],
['d', 'y', 't'],
['o', 'g', 'z']]

let word = 'cat'

findWord(grid, word) ? console.log(true) : console.log(false)

function findWord(grid, word) {
    const m = grid.length;
    const n = grid[0].length;
    let wordLength = word.length
    if (wordLength > m * n)
        return false
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == word[0])
                if (findmatch(grid, word, i, j, m, n, 0))
                    return true
        }
    }
    return false

}
function findmatch(grid, word, x, y, m, n, pos) {
    let wordLength = word.length
    if (pos == wordLength)
        return true
    if (x < 0 || y < 0 || x >= m || y >= n)
        return false
    if (grid[x][y] == word[pos]) {
        let temp = grid[x][y];
        grid[x][y] = '#'
        let match =
            findmatch(grid, word, x - 1, y, m, n, pos + 1) |
            findmatch(grid, word, x + 1, y, m, n, pos + 1) |
            findmatch(grid, word, x, y - 1, m, n, pos + 1) |
            findmatch(grid, word, x, y + 1, m, n, pos + 1)
        grid[x][y] = temp
        return match
    }
    else
        return false
}