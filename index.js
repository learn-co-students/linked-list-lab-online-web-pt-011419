function getName(node) {
    return node.name;
}

function headNode(linkedList, collection) {
    return collection[linkedList];
}

function next(head, collection) {
    return collection[head.next];
}

function nodeAt(index, linkedList, collection) {
    let head = headNode(linkedList, collection);
    let node = next(head, collection);

    if(index === 0) {
        return head;
    }

    for(let i = 0; i < index - 1; i++) {
        node = next(node, collection);
    }

    return node;
}

function addressAt(index, linkedList, collection) {
    if(index === 0) {
        return linkedList;
    }

    let node = collection[linkedList]

    return node.next;

}

function indexAt(node, collection, linkedList) {
    let currentNode = headNode(linkedList, collection);
    let i = 0;

    while(currentNode !== node) {
        i++;
        currentNode = next(currentNode, collection);
    }

    return i;
}

function insertNodeAt(index, key, linkedList, collection) {
    let nodeBefore = nodeAt(index - 1, linkedList, collection);

    if(nodeBefore) {
        collection[key].next = nodeBefore.next;
        nodeBefore.next = key;
    }
}

function deleteNodeAt(index, linkedList, collection) {
    let nodeBefore = nodeAt(index - 1, linkedList, collection);

    nodeBefore.next = nodeAt(index, linkedList, collection).next;
}