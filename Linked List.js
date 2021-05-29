// initially the list is null
// let list = null;

// node structure
// let node = {
//     value: 4,
//     next: null
// }

// making standalone node
// function makeNode(value) {
//     return {
//         value: value,
//         next: null
//     }
// }

// let four = makeNode(4);
// let three = makeNode(3);
// let two = makeNode(2);
// let one = makeNode(1);

// // manually linking among nodes 
// four.next = three;
// three.next = two;
// two.next = one;

// // printing nodes value
// let printList = (list) => {
//     let current = list;

//     while(current) {
//         console.log(current.value)

//         current = current.next;
//     }
// }

// //printList(one);

// // printing value recursively 

// let printListRecursively = (list) => {
//     if(list) {
//         console.log(list.value);
//     } else {
//         return;
//     }
//     printListRecursively(list.next)
// }

// printListRecursively(four);

// making standalone node
function makeNode(value) {
    return {
        value: value,
        next: null
    }
}

// Class-based approach
class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0; // for autometic length count
    }

    append(value) {
        let node = makeNode(value)

        this.length++;

        if(!this.tail) {
            // head and tail are same
            this.head = this.tail = node;
            return node;
        }

        this.tail.next = node;
        this.tail = node;

        return node;
    }

    prepend(value) {
        let node = makeNode(value);

        this.length++;

        if(!this.head) {
            this.head = this.tail = node;
            return node;
        }

        node.next = this.head;
        this.head = node;

        return node;
    }

    // remove first element
    removeFirst() {
        if(!this.head){
            return null
        }
        let nodeToRemove = this.head;
        this.head = nodeToRemove.next;

        nodeToRemove.next = null;

        if(nodeToRemove === this.tail) {
            this.tail = null;
        }

        this.length--;

        return nodeToRemove;
    }

    // removing last element
    removeLast() {
        if(!this.tail) {
            // if empty list
            return null
        }
        
        let findNodeBefore = this.head;
        
        //if only one node
        if(findNodeBefore === this.tail) {
            this.head = this.tail = null;

            return findNodeBefore;
        }

        // find node just before last node
        while(findNodeBefore.next !== this.tail){
            findNodeBefore = findNodeBefore.next;
        }

        this.tail = findNodeBefore;
        findNodeBefore.next = null;

        this.length--;

        return findNodeBefore;
    }

    // manually length counting
    getLength() {
        let current = this.head;
        let count = 0;

        while(current){
            count++;
            current = current.next;
        }

        return count;
    }

    // inserting node in the middle
    insert(value, index) {
        // if index is less or equal 0, or falsy value
        if(index <= 0 || !index) {
            return this.prepend(value);
        }

        // if index is greater or equal total length
        if(index >= this.length) {
            return this.append(value);
        }

        let previous = null;
        let current = this.head;
        let currentIndex = 0;

        let node = makeNode(value);
        while(current && currentIndex !== index) {
            previous = current;
            current = current.next;
            currentIndex++;
        }

        node.next = previous.next;
        previous.next = node;

        this.length++;

        return node;

    }

    print() {
        let current = this.head;

        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let test = new List();
//test.print();

test.append(4);
test.append(3);
test.append(2);
test.append(1);
//test.print()

//test.prepend(5);
//test.prepend(6)
//test.print()

//test.removeFirst()
//test.removeLast()
//test.removeLast()
//test.removeLast()
//test.removeLast()

test.insert(5, 0);
test.insert(0, 7);

test.insert(10, 2);


test.print()
//console.log(test.length)