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
    }

    append(value) {
        let node = makeNode(value)

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

        if(!this.head) {
            this.head = this.tail = node;
            return node;
        }

        node.next = this.head;
        this.head = node;

        return node;
    }

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

        return nodeToRemove;
    }

    removeLast() {
        if(!this.tail) {
            //console.log('abc')
            return null
        }
        
        let findNodeBefore = this.head;
        //console.log(findNodeBefore.value)
        while(findNodeBefore){
            //console.log(findNodeBefore.value);
            if(findNodeBefore.next === this.tail) {
                break;
            }
            findNodeBefore = findNodeBefore.next;
        }

        this.tail = findNodeBefore;

        if(!this.tail) {
            this.head = null;
        }

        //console.log(this.tail.next)

        // if(this.tail === this.head){
        //     this.head = null;
        // }
        return findNodeBefore;
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
test.print();

test.append(4);
test.append(3);
test.append(2);
test.append(1);
//test.print()

//test.prepend(5);
//test.prepend(6)
//test.print()

//test.removeFirst()
test.removeLast()
test.removeLast()
test.removeLast()
test.removeLast()


test.print()