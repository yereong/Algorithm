function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;

    if (maps[0][0] === 0 || maps[n-1][m-1] === 0) return -1;

    const dist = Array.from({ length: n }, () => Array(m).fill(-1));
    dist[0][0] = 1;

    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    const queue = new Int32Array(n * m * 2); // 미리 할당
    let head = 0, tail = 0;

    queue[tail++] = 0;
    queue[tail++] = 0;

    while (head < tail) {
        const row = queue[head++];
        const col = queue[head++];

        if (row === n-1 && col === m-1) return dist[row][col];

        for (const [dr, dc] of dirs) {
            const nr = row + dr;
            const nc = col + dc;
            if (nr >= 0 && nr < n && nc >= 0 && nc < m && maps[nr][nc] === 1 && dist[nr][nc] === -1) {
                dist[nr][nc] = dist[row][col] + 1;
                queue[tail++] = nr;
                queue[tail++] = nc;
            }
        }
    }

    return -1;
}