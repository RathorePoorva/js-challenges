// Create an array numbers = [15, 25, 35, 45, 55, 65].
let arr = [15, 25, 35, 45, 55, 65];
// Using .forEach method, find the sum of the elements in numbers.
let sum = 0;
arr.forEach((val) => (sum += val));
console.log("Sum - for Each", sum);
// On the next line use the .reduce method to find the sum of the elements in numbers.
let results = 0;
results = arr.reduce((prev, current) => {
  const sum = prev + current;
  return sum;
}, 0);
console.log("Results - array.reduce", results);

//--------------------------------------------------

const employees = [
  {
    name: "Michael Scott",
    department: "Management",
  },
  {
    name: "Dwight Schrute",
    department: "Sales",
  },
  {
    name: "Jim Halpert",
    department: "Sales",
  },
  {
    name: "Pam Beesly",
    department: "Admin",
  },
  {
    name: "Angela Martin",
    department: "Accounting",
  },
  {
    name: "Kevin Malone",
    department: "Accounting",
  },
  {
    name: "Andy Bernard",
    department: "Sales",
  },
  {
    name: "Oscar Martinez",
    department: "Accounting",
  },
];
// Using the employees array, create another array called sales that contains all the employees in the Sales department.
let salesArr = employees.filter((val) => val.department === "Sales");
console.log("All employees in Sales", salesArr);
// Using the employees array, create another array called accounting that contains all the employees in the Accounting department.
let accountingArr = employees.filter((val) => val.department === "Accounting");
console.log("All employees in Accounting", accountingArr);

//--------------------------------------------------

const ingredients = [
  { name: "Dough", quantity: 1, price: 2.5 },
  { name: "Tomato Sauce", quantity: 1, price: 1.0 },
  { name: "Cheese", quantity: 2, price: 3.0 },
  { name: "Pepperoni", quantity: 10, price: 2.5 },
  { name: "Mushrooms", quantity: 8, price: 1.5 },
  { name: "Green Peppers", quantity: 5, price: 1.0 },
  { name: "Onions", quantity: 4, price: 0.75 },
  { name: "Olives", quantity: 6, price: 1.25 },
  { name: "Bacon", quantity: 3, price: 2.0 },
  { name: "Sausage", quantity: 5, price: 2.5 },
];
// Given an array ingredients, calculate the total cost using .reduce.
let result = ingredients.reduce((prev, curr) => {
  return prev + curr.price;
}, 0);
console.log("Total cost: ", result);

//--------------------------------------------------

const fruits = [
  { name: "Apple", color: "Red", price: 1.5 },
  { name: "Banana", color: "Yellow", price: 0.5 },
  { name: "Orange", color: "Orange", price: null },
  { name: "Grapes", color: "Purple", price: 3 },
  { name: "Watermelon", color: "Green", price: 4 },
  { name: "Strawberry", color: "Red", price: 2.5 },
  { name: "Mango", color: "Yellow", price: null },
  { name: "Pineapple", color: "Yellow", price: null },
  { name: "Cherry", color: "Red", price: 2 },
  { name: "Blueberry", color: "Blue", price: 2.8 },
];

// Filter out the fruits with null price.
let filteredArr = fruits.filter((val) => val.price !== null);
console.log("Null values filtered", filteredArr);
// Create a new array updatedPrice from this filtered array with the price of each doubled.
let updatedPriceArr = filteredArr.map((val) => {
  val.price *= 2;
  return val;
});
console.log("doubled price arr", updatedPriceArr);
// Print the new price of each fruit: " now costs ".
updatedPriceArr.forEach((val) =>
  console.log(`New Price of ${val.name} is ${val.price}.`)
);
// Create a orderPrice variable that stores the sum of all the price of the fruits in updatedPrice.
let totalCostFruits = updatedPriceArr.reduce((prev, curr) => {
  return prev + curr.price;
}, 0);
console.log("total cost of fruits", totalCostFruits);
