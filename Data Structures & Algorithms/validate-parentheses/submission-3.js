class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let openingB = ["[","{","("]
        let closingB = ["]","}",")"]
        let stack = [];
        for(let char of s){
            if(openingB.includes(char)){
                stack.push(char)
            }else {
                if (stack.length === 0) {
                    return false;
                }
                let top = stack[stack.length-1]
                let indexofTop = openingB.indexOf(top)
                let indexOfChar = closingB.indexOf(char)
                if(indexofTop == indexOfChar){
                    stack.pop()
                }else {
                    return false
                }
            }
        }
        return (stack.length === 0) ? true : false

    }
}
