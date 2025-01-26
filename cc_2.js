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
  // Update the department property
  employee.department = "Marketing";
  
  // Add a new property 'position' to the object
  employee.position = "Team Lead";
  
  // Log the updated object to the console
  console.log("Updated Employee Record:", employee);

  // Task 4 - Array of objects
  // Declare an array of customer objects
let customers = [
    { name: "Krupa Jacob", email: "krupa.jacob36@gmail.com", purchaseAmount: 120.50 },
    { name: "Skyler Jones", email: "skyler121@gmail.com", purchaseAmount: 85.75 },
    { name: "Charlie Brown", email: "charlie08example.com", purchaseAmount: 98.00 }
  ];
  
  // Step 2: Add a new customer object to the array
  customers.push({ name: "Diana Prince", email: "diana12@gmail.com", purchaseAmount: 150.25 });
  
  // Step 3: Log the entire customer list to the console
  console.log("Customer List:", customers);