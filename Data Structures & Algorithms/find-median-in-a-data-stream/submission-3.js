class MedianFinder {
    constructor() {
        // Max heap
        this.small = new PriorityQueue((a,b)=> b-a);
        // Min heap
        this.large = new PriorityQueue((a,b)=> a-b);
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        
        if(this.large.isEmpty() || num > this.large.front()){
            this.large.enqueue(num)
        }else {
            this.small.enqueue(num)
        }
        const largeSize = this.large.size();
        const smallSize = this.small.size();
        if(largeSize > smallSize + 1){
            this.small.enqueue(this.large.dequeue())
        }else if(smallSize > largeSize + 1) {
            this.large.enqueue(this.small.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        const largeSize = this.large.size();
        const smallSize = this.small.size();
        if(largeSize > smallSize){
            return this.large.front();
        }else if(largeSize < smallSize){
            return this.small.front()
        }else {
            const smallFront = this.small.front();
            const largeFront = this.large.front();
            return (smallFront + largeFront)/2
        }
    }
}
