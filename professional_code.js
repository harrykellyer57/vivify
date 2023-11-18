/** 
 * professional_code.js
 * 
 * This file contains a sophisticated JavaScript code that demonstrates various advanced concepts.
 * 
 * Author: Your Name
 * Date: Current Date
 */

"use strict";

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friends = [];
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  getFriendsCount() {
    return this.friends.length;
  }
}

// Factory function to create multiple Person instances
function createPeople() {
  const people = [];

  people.push(new Person("John", 25));
  people.push(new Person("Alice", 30));
  people.push(new Person("Bob", 40));

  return people;
}

// Example usage of the Person class and factory function
const people = createPeople();

for (let person of people) {
  person.greet();
}

people[0].addFriend(people[1]);
people[1].addFriend(people[2]);

console.log(`John has ${people[0].getFriendsCount()} friend(s).`);

// Function that calculates the factorial of a positive integer recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(`Factorial of 5 is ${factorial(5)}.`);

// Queue class using an array
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty.";
    } else {
      return this.queue.shift();
    }
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

// Example usage of the Queue class
const queue = new Queue();

queue.enqueue("apple");
queue.enqueue("banana");
queue.enqueue("cherry");

console.log(`Dequeued item: ${queue.dequeue()}`);
console.log(`Queue size: ${queue.size()}`);
console.log(`Is the queue empty? ${queue.isEmpty()}`);

// Recursive function to calculate the nth Fibonacci number
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(`Fibonacci number at index 7: ${fibonacci(7)}.`);

// Advanced array manipulation using map, filter, and reduce
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);
console.log(`Doubled numbers: ${doubledNumbers}`);

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(`Even numbers: ${evenNumbers}`);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(`Sum of numbers: ${sum}`);

// Example of asynchronous code using setTimeout and Promises
function delayedGreeting() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, after 2 seconds!");
    }, 2000);
  });
}

delayedGreeting().then((message) => console.log(message));

// More advanced concepts and code can be added here...

// ...

// End of the code