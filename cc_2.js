// Task 1 - Working with arrays

//  Declare and initialize an array of products
let products = ["Laptop", "Smartphone", "Tablet", "Headphones", "Smartwatch"];

//  Add a new product to the array
products.push("Camera");

//  Remove the last product from the array
products.pop();

//  Log the updated product list to the console
console.log("Updated Product List:", products);

// Task 2 - acessing and modifying arrays

// Declare and initialize an array of scores
let scores = [89, 94, 79, 88, 92];

// Update the second score in the array
scores[1] = 95;

// Calculate the average of all scores
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;

// Log the updated array and the average score to the console
console.log("Updated Scores:", scores);
console.log("Average Score:", average);

// Task 3 working with objects
// Declare an object with initial properties
let employee = {
    name: "Krupa Jacob",
    age: 24,
    department: "Sales",
    isActive: true
  };
  
  // Step 2: Update the department property
  employee.department = "Marketing";
  
  // Step 3: Add a new property 'position' to the object
  employee.position = "Team Lead";
  
  // Step 4: Log the updated object to the console
  console.log("Updated Employee Record:", employee);