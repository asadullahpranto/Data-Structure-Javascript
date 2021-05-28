// let list = null;

// let node = {
//     value: 4,
//     next: null
// }

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

four.next = three;
three.next = two;
two.next = one;

let printList = (list) => {
    let current = list;

    while(current) {
        console.log(current.value)

        current = current.next;
    }
}

printList(one);