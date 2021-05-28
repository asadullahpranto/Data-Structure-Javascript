// initially the list is null
// let list = null;

// node structure
// let node = {
//     value: 4,
//     next: null
// }

// making standalone node
function makeNode(value) {
    return {
        value: value,
        next: null
    }
}

let four = makeNode(4);
let three = makeNode(3);
let two = makeNode(2);
let one = makeNode(1);

// manually linking among nodes 
four.next = three;
three.next = two;
two.next = one;

// printing nodes value
let printList = (list) => {
    let current = list;

    while(current) {
        console.log(current.value)

        current = current.next;
    }
}

//printList(one);

// printing value recursively 

let printListRecursively = (list) => {
    if(list) {
        console.log(list.value);
    } else {
        return;
    }
    printListRecursively(list.next)
}

printListRecursively(four);