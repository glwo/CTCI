/*
An animal shelter, which holds only dogs and cats, operates strictly on a first in first out basis.

People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type).

They cannot select which specific animal they would like.

Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat.

You may use the built-in LinkedList data structure
*/
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    pop() {
        if (!this.head) return null;
        const poppedNode = this.head;
        this.head = this.head.next;
        poppedNode.next = null;
        return poppedNode.data;
    }
}

class AnimalShelter {
    constructor() {
        this.dogQueue = new LinkedList();
        this.catQueue = new LinkedList();
    }

    enqueue(animal) {
        if (animal.type === 'dog') {
            this.dogQueue.append(animal);
        } else if (animal.type === 'cat') {
            this.catQueue.append(animal);
        }
    }

    dequeueAny() {
        const oldestDog = this.dogQueue.head;
        const oldestCat = this.catQueue.head;

        if (!oldestDog && !oldestCat) {
            return null;
        } else if (!oldestDog) {
            return this.catQueue.pop();
        } else if (!oldestCat) {
            return this.dogQueue.pop();
        }

        return oldestDog.data.name < oldestCat.data.name ? this.dogQueue.pop() : this.catQueue.pop();
    }

    dequeueDog() {
        return this.dogQueue.pop();
    }

    dequeueCat() {
        return this.catQueue.pop();
    }
}

const animalShelter = new AnimalShelter();

animalShelter.enqueue(new Animal("Buddy", "dog"));
animalShelter.enqueue(new Animal("Whiskers", "cat"));
animalShelter.enqueue(new Animal("Rex", "dog"));
animalShelter.enqueue(new Animal("Mittens", "cat"));

console.log("Dequeue Any:", animalShelter.dequeueAny()); // Expected output: Animal { name: 'Buddy', type: 'dog' }
console.log("Dequeue Dog:", animalShelter.dequeueDog());   // Expected output: Animal { name: 'Rex', type: 'dog' }
console.log("Dequeue Cat:", animalShelter.dequeueCat());   // Expected output: Animal { name: 'Whiskers', type: 'cat' }
console.log("Dequeue Any:", animalShelter.dequeueAny());   // Expected output: Animal { name: 'Mittens', type: 'cat' }

