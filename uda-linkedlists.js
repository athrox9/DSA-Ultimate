// Construct Single Node
class Node {
    constructor(value, next) {
      this.value = value
      this.next = next
    }
}

class LinkedList {
    constructor() {
      this.head = null
      this.length = 0
      this.tail = null
    }
    addLast(data){
        let node = new Node(data)
        if(!this.head){ //if == null
            this.head = this.tail = node
        }
        else{ //if != null 
            this.tail.next = node 
            this.tail = node 
        }
        this.length++
    }
    addFirst(data){
        let node = new Node(data)
        if(!this.head){
            this.head = this.tail = node 
        }
        else{
            node.next = this.head // push the this.head to next index
            this.head = node // assign the first index to the new node 
        }
        this.length++
    }
    removeFirst(){
        if(!this.head){
            console.log('LinkedList has no nodes');
        }
        else{
            let second = this.head.next
            this.head.next = null
            this.head = second 
        }
        this.length--
    }
    removeLast(){
        if(!this.head){
            console.log('LinkedList has no nodes');
        }
        else{
            let current = this.head
            while (current != null){
                if (current.next == this.tail) break;
                current = current.next;
            }
            this.tail = current
            this.tail.next = null
        }
        this.length--
    }
    indexof(data){
        if(!this.head){
            console.log('LinkedList has no nodes');
        }
        else{
            let index = 0;
            let current = this.head;
            // iterate over the list
            while (current != null) {
                // compare each element of the list
                // with given element
                if (current.value === data){
                    console.log('index of ' + data + ' is ' + index);
                }
                index++;
                current = current.next;
            }
        }
    }
    contains(data){
        if(!this.head){
            console.log('LinkedList has no nodes');
        }
        else{
            let index = 0;
            let current = this.head;
            while (current != null) {
                if (current.value === data){
                    console.log('LinkedList contains ' + data);
                }
                index++;
                current = current.next;
            }
        }
    }   
    printListData(){
        if(!this.head){
            console.log('LinkedList has no nodes');
        }
        else{
            console.log('LinkedList is below:');
            let current = this.head;
            while (current){
                console.log(current.value)
                current = current.next
            }
        }
    }
    toArray(){
        if(!this.head){
            console.log('LinkedList has no nodes');
        }
        else{
            let array = new Array(this.length)
            let current = this.head
            let index = 0
            while (current != null){
                array[index] = current.value
                index++
                current = current.next
            }
            console.log(array);
        } 
    }
    reverseLL(){
        if(!this.head){
            console.log('LinkedList has no nodes');
        }
        else{
            // 10 -> 20 -> 30
            // p     c     n 
            // 10 <- 20 <- 30
            //       p     c    n 
            // 10 <- 20 <- 30 
            //             p    [c=null,p.next]     n[c.next]
            let p = this.head
            let c = p.next
            while (c != null){ 
                let n = c.next // n get's a place
                c.next = p // 10 -> 20 becomes 10 <- 20 
                p = c // p moves to c's place
                c = n // c moves to n's place
            } 
            this.tail = this.head // whatever is in the head! (we never changed it!)
            this.tail.next = null // 
            this.head = p // p on line 137 became 30, essentially the tail, so this.head = p 
        }
    }

    // TWO POINTER TECHNIQUE - process two elements per loop, and not one
    // in one pass , 0(n) instead of 0(n²)

    getKthFromTheEnd(k){
        if(!this.head){
            console.log('LinkedList has no nodes');
        }
        else if (k > this.length){
            console.log('k is too large');
        }
        else{
        let a = this.head 
        let b = this.head
        for (let i = 0; i < k-1; i++){ 
            b = b.next 
        } // b position is set according to the k given
        while (b != this.tail){ // now a and b play the game together 
            a = a.next 
            b = b.next 
        }
        console.log(a.value);
    }}
    printMiddle(){
        let a = this.head 
        let b = this.head
        // node 1, middle 1
        // node 2, middle 1,2
        // node 3, middle 2 
        // node 4, middle 2,3 
        // node 5, middle 3
        while (b != this.tail && b.next != this.tail){ //for odd and even , respectively (size)
            b = b.next.next // by 2
            a = a.next // by 1 
        }
        if (b == this.tail){
            console.log(a.value);
        }
        else{ // b == this
            console.log(a.value + ", " + a.next.value);
        }
    }
}

let ll = new LinkedList()

ll.addLast(10)
ll.addLast(20)
ll.addLast(30)
ll.addFirst(40)
ll.addFirst(50)
console.log(ll)

ll.indexof(20)
ll.contains(20)
ll.printListData()

ll.removeFirst()
ll.removeLast()
ll.printListData() 
ll.toArray()
    
ll.reverseLL()
ll.toArray()
ll.getKthFromTheEnd(3)
ll.printMiddle()