class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length
        let s = 0
        let e = n-1
        let ans = Number.NEGATIVE_INFINITY
        while(s<e){
            let w = e-s
            let h = Math.min(heights[s],heights[e])
            let area = w*h
            ans = Math.max(area,ans)
            if(heights[s]<heights[e]){
                s++
            }else {
                e--
            }
        }
        return ans
    }
}
