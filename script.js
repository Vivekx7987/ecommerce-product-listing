const products = [
  { name: "Wireless Headphones", price: 2999, category: "electronics" },
  { name: "Smart Watch", price: 4999, category: "electronics" },
  { name: "Running Shoes", price: 2499, category: "fashion" },
  { name: "Leather Wallet", price: 999, category: "accessories" },
  { name: "Sunglasses", price: 1499, category: "accessories" },
  { name: "Hoodie", price: 1999, category: "fashion" }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceSort = document.getElementById("priceSort");

function displayProducts(list) {
  productGrid.innerHTML = "";

  if (list.length === 0) {
    productGrid.innerHTML = "<p>No products found.</p>";
    return;
  }

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <div class="price">₹${product.price}</div>
    `;

    productGrid.appendChild(card);
  });
}

function applyFilters() {
  let filtered = [...products];

  const searchValue = searchInput.value.toLowerCase();
  const categoryValue = categoryFilter.value;
  const sortValue = priceSort.value;

  if (searchValue) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(searchValue)
    );
  }

  if (categoryValue !== "all") {
    filtered = filtered.filter(p => p.category === categoryValue);
  }

  if (sortValue === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sortValue === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
priceSort.addEventListener("change", applyFilters);

displayProducts(products);
