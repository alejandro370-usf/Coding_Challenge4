
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