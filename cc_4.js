
// Array of products
const products = [
  { name: "Laptop", category: "electronics", price: 1000, inventory: 5 },
  { name: "Jacket", category: "apparel", price: 25, inventory: 10 },
  { name: "Chicken Breast", category: "groceries", price: 1, inventory: 100 },
  { name: "Bounty Wipes", category: "household", price: 5, inventory: 50 },
  { name: "School Textbooks", category: "School Textbooks", price: 15, inventory: 20 },
];
// Discount based on category
for (const product of products) {
  switch (product.category) {
    case "electronics":
      product.price *= 0.8; // 20% off
      break;
    case "apparel":
      product.price *= 0.85; // 15% off
      break;
    case "groceries":
    case "household":
      product.price *= 0.9; // 10% off
      break;
    default:
      // No discount
      break;
  }
  // Log new price after category discount
  console.log(`Discounted price for ${product.name}: $${product.price.toFixed(2)}`);
}
//  Customer type extra discount 
function getExtraDiscount(customerType) {
  if (customerType === "student") {
    return 0.05;
  } else if (customerType === "senior") {
    return 0.07;
  } else {
    return 0;
  }
}
// Checkout for 3 customers
const customerTypes = ["regular", "student", "senior"];

for (let i = 0; i < 3; i++) {
  let total = 0;
  const customer = `Customer ${i + 1}`;
  const customerType = customerTypes[i];
  const extraDiscount = getExtraDiscount(customerType);

  for (const product of products) {
    const quantity = 1; // Customer buys 1 of each
    if (product.inventory >= quantity) {
      const itemTotal = product.price * quantity;
      total += itemTotal;
      product.inventory -= quantity; // Reduce inventory
    }
  }
  total *= 1 - extraDiscount; // Apply extra discount
  console.log(`${customer} (${customerType}) total: $${total.toFixed(2)}`);
}
// for...in step 6
const sampleProduct = products[0];
console.log("\nSample product details using for...in:");
for (const key in sampleProduct) {
  console.log(`${key}: ${sampleProduct[key]}`);
}

//  Object.entries Step 7 
console.log("\nAll products after inventory update:");
for (const product of products) {
  const entries = Object.entries(product);
  const productInfo = entries.map(([key, value]) => `${key}: ${value}`).join(", ");
  console.log(productInfo);
}
