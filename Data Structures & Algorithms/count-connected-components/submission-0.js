class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // make adjacency list
        // why?
        // 0 -> 1
        // 1 -> 0,2
        // 2 -> 1

        let len = edges.length;
        let adList = Array.from({ length: n }, () => []); 
        for(let i = 0;i< len;i++){
            let node1 = edges[i][0];
            let node2 = edges[i][1];
            adList[node1].push(node2)
            adList[node2].push(node1)
        }
        let visited = Array(n).fill(false);
        let count = 0
        for(let i = 0;i< n;i++){
            if(visited[i] === false){
                dfs(i,visited,adList)
                count++;
            }
        }
    
        function dfs(i,visited,adList){
            visited[i] = true;
            for(let j = 0;j<adList[i].length;j++){
                let neighbour = adList[i][j]
                if(visited[neighbour] === false) dfs(neighbour,visited,adList)
            }
        }
        return count
    }
}
