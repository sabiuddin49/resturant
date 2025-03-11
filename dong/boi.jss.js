// Example: Dynamically load item details (optional)
document.addEventListener("DOMContentLoaded", function () {
    const itemName = document.querySelector("h1").innerText;
    const itemImage = document.querySelector("img");
    const itemPrice = document.querySelector("p");
  
    // Fetch item details from a JSON file or API (optional)
    const items = {
      "Chicken Fry": { image: "images/chicken-fry.jpg", price: "$10" },
      "Fish Fry": { image: "images/fish-fry.jpg", price: "$12" },
      // Add other items here
    };
  
    if (items[itemName]) {
      itemImage.src = items[itemName].image;
      itemPrice.innerText = `Price: ${items[itemName].price}`;
    }
  });