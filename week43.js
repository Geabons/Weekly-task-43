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

function drawBox(n, m) {
  let box = {};
  box = "+" + "-".repeat(m * 4) + "+" + "\n";

  for (let i = 0; i < n; i++) {
    box += "|" + " ".repeat(m * 4) + "|" + "\n";
  }
  box += "+" + "-".repeat(m * 4) + "+";

  return box;
}

console.log(drawBox(2, 2));

/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log("Task: D");

function isHeterogram(word) {
  const letters = {};
  let char = {};

  for (let i = 0; i < word.length; i++) {
    char = word[i].toLowerCase();
    if (char >= "a" && char <= "z") {
      if (letters[char]) {
        return false;
      }
    }
    letters[char] = true;
  }
  return true;
}

console.log(isHeterogram("fish"));
console.log(isHeterogram("congratulations"));
console.log(isHeterogram("The big dwarf only jumps"));
console.log(isHeterogram("success"));

/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");

function isAnagram(word1, word2) {
  const cleanedWord1 = word1.split(" ").join("").toLowerCase();
  const cleanedWord2 = word2.split(" ").join("").toLowerCase();

  if (cleanedWord1.length !== cleanedWord2.length) {
    return false;
  }

  const sortedWord1 = cleanedWord1.split("").sort().join("");
  const sortedWord2 = cleanedWord2.split("").sort().join("");

  if (sortedWord1 === sortedWord2) {
    return true;
  }else{
    return false;
  }
}
console.log(isAnagram("snake", "sneak"));
console.log(isAnagram("triangle", "integral"));
console.log(isAnagram("apple", "pale"));
console.log(isAnagram("Dormitory", "Dirty room"));
console.log(isAnagram("pie", "ole"));
