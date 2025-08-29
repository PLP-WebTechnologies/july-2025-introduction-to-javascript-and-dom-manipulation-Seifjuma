// 🎯 Part 1: Variables, Data Types, Conditionals
let userName = ""; // Variable declaration

document.getElementById("greetBtn").addEventListener("click", function () {
  userName = document.getElementById("username").value;

  if (userName.length > 0) {
    document.getElementById("greeting").textContent = `Hello, ${userName}!`;
  } else {
    document.getElementById("greeting").textContent = "Please enter your name.";
  }
});

// ❤️ Part 2: Functions

// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to format currency
function formatCurrency(amount) {
  return `KES ${amount.toFixed(2)}`;
}

document.getElementById("calculateBtn").addEventListener("click", function () {
  const total = calculateTotal(1500, 3); // Example values
  document.getElementById("totalResult").textContent = formatCurrency(total);
});

// 🔁 Part 3: Loops

const items = ["Mouse", "Keyboard", "Monitor", "Headset"];
const list = document.getElementById("loopList");

// Using for loop
for (let i = 0; i < items.length; i++) {
  const li = document.createElement("li");
  li.textContent = items[i];
  list.appendChild(li);
}

// Using forEach loop
items.forEach((item, index) => {
  console.log(`Item ${index + 1}: ${item}`);
});

// 🌐 Part 4: DOM Manipulation

// 1. Changing text content (already done in greetBtn and calculateBtn)
// 2. Creating elements dynamically (done in loop)
// 3. Toggling class
document.getElementById("greetBtn").addEventListener("click", function () {
  document.getElementById("greeting").classList.toggle("highlight");
});

// Optional: Add CSS for highlight class
// .highlight { color: green; font-weight: bold; }