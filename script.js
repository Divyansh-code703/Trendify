
const products = [
    { id: 1, title: "Men T-Shirt", price: 499, cat: "men", img: "https://picsum.photos/200?1", desc: "Comfortable cotton t-shirt" },
    { id: 2, title: "Women Top", price: 699, cat: "women", img: "https://picsum.photos/200?2", desc: "Stylish modern top" },
    { id: 3, title: "Kids Jacket", price: 899, cat: "kids", img: "https://picsum.photos/200?3", desc: "Warm kids jacket" },
    { id: 4, title: "Men Hoodie", price: 1299, cat: "men", img: "https://picsum.photos/200?4", desc: "Winter warm hoodie" }
];

let cart = [];

function displayProducts(list) {
    const container = document.getElementById("productList");
    container.innerHTML = "";

    list.forEach(p => {
        container.innerHTML += `
            <div class="product" onclick="openPopup(${p.id})">
                <img src="${p.img}" />
                <h3>${p.title}</h3>
                <p>₹${p.price}</p>
                <button onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}

displayProducts(products);

// SEARCH
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
    const val = searchInput.value.toLowerCase();
    const filtered = products.filter(p => p.title.toLowerCase().includes(val));
    displayProducts(filtered);
});

// FILTERS
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");

function applyFilters() {
    let list = products;

    if (categoryFilter.value !== "all") {
        list = list.filter(p => p.cat === categoryFilter.value);
    }

    if (priceFilter.value === "low") list = list.filter(p => p.price < 500);
    if (priceFilter.value === "mid") list = list.filter(p => p.price >= 500 && p.price <= 1000);
    if (priceFilter.value === "high") list = list.filter(p => p.price > 1000);

    displayProducts(list);
}

categoryFilter.onchange = applyFilters;
priceFilter.onchange = applyFilters;

// POPUP
function openPopup(id) {
    const p = products.find(x => x.id === id);
    document.getElementById("popupImg").src = p.img;
    document.getElementById("popupTitle").textContent = p.title;
    document.getElementById("popupPrice").textContent = `₹${p.price}`;
    document.getElementById("popupDesc").textContent = p.desc;

    document.getElementById("popupAddToCart").onclick = () => addToCart(id);

    document.getElementById("productPopup").classList.remove("hidden");
}

document.getElementById("closePopup").onclick = () => {
    document.getElementById("productPopup").classList.add("hidden");
};

// CART
function addToCart(id) {
    cart.push(id);
    document.getElementById("cartCount").textContent = cart.length;
    alert("Added to cart");
          }
