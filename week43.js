// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our syllabus.

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"];

for (let index = 0; index < people.length; index++) {
  let person = people[index];
  console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/
console.log("Task: A");

function drawTree(height) {
  let tree = "";
  let spaces = "";
  let stars = "";

  for (let i = 0; i < height - 1; i++) {
    spaces = " ".repeat(height - i - 1);
    stars = "*".repeat(2 * i + 1);
    tree += spaces + stars + "\n";
  }

  let trunkSpaces = " ".repeat(height - 1);
  tree += trunkSpaces + "x";

  return tree;
}

console.log(drawTree(5));

/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/
console.log("Task: B");

function drawArrow(size) {
  let arrow = "";

  for (let i = 1; i <= size; i++) {
    arrow += "* ".repeat(i) + "\n";
  }
  for (let i = size - 1; i > 0; i--) {
    arrow += "* ".repeat(i) + "\n";
  }

  return arrow;
}

console.log(drawArrow(3));
/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into account the difference in aspect-ratio.

    Example: This is a approximately a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/
console.log("Task: C");

function drawBox(n, m) {}

/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log("Task: D");

function heterogramWord(word) {}

/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");

function isAnagram(word) {}
