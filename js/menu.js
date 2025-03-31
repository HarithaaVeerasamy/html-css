const data_1 = [
  {
    title: "Chicken Clear Soup",
    price: "₹154",
    body: "A light and flavorful soup made with tender chicken pieces and assorted vegetables.",
  },
  {
    title: "Crab Soup",
    price: "₹201",
    body: "A flavorful and aromatic soup made with tender crab pieces",
  },
  {
    title: "Hot & Sour Chicken Soup",
    price: "₹174",
    body: "A tangy and spicy soup made with tender chicken pieces",
  },
  {
    title: "Chicken 65",
    price: "₹388",
    body: "Crispy and flavorful chicken fry made with marinated chicken coated in a spicy batter",
  },
  {
    title: "Chilly Chicken",
    price: "₹388",
    body: "Tender chicken pieces cooked in a spicy and flavorful chili sauce",
  },
  {
    title: "Chilly Gobi",
    price: "₹241",
    body: "Crispy cauliflower florets cooked in a spicy and flavorful chili sauce",
  },
  {
    title: "Chilly Paneer",
    price: "₹241",
    body: "Crispy and flavorful paneer cooked in a spicy and flavorful chili sauce",
  },
  {
    title: "Bbq Boneless",
    price: "₹455",
    body: "Tender boneless chicken pieces marinated in a smoky and flavorful BBQ sauce",
  },
];
const data_2 = [
  {
    title: "Chettinadu Grill",
    price: "₹341",
    body: "Succulent chicken pieces marinated in yogurt and spices, skewered and grilled to perfection.",
  },
  {
    title: "Chinese Grill",
    price: "₹341",
    body: "Full portion of grilled chicken prepared Chinese style, marinated in a savory and aromatic Chinese sauce",
  },
  {
    title: "Garlic Grill",
    price: "₹341",
    body: "Tender chicken pieces marinated in a flavorful garlic-based marinade and grilled to perfection",
  },
  {
    title: "Hariyali Kebab",
    price: "₹441",
    body: "Succulent chicken pieces marinated in a vibrant green mixture of mint, cilantro",
  },
  {
    title: "Tangdy Kebab",
    price: "₹415",
    body: "Tender chicken drumsticks marinated in a flavorful blend of spices and herbs",
  },
  {
    title: "Egg Biryani",
    price: "₹328",
    body: "A delightful rice dish cooked with fragrant seeraga samba rice, boiled eggs, and aromatic spices",
  },
  {
    title: "Mutton Biryani",
    price: "₹482",
    body: "A classic Indian rice dish cooked with fragrant seeraga samba rice and tender pieces",
  },
  {
    title: "Cheezy Cheese Veg Pizza",
    price: "₹219",
    body: "Thin & Crispy crust, loaded with Crunchy Onion, Green Capsicum, Red Bell Pepper",
  },
];
const data_3 = [
  {
    title: "Magical Makhni Paneer Pizza",
    price: "₹299",
    body: "Thin & Crispy crust, loaded with Spiced paneer, crunchy onion, green capsicum.",
  },
  {
    title: "Ultimate Tandoori Veggie Pizza",
    price: "₹379",
    body: "An ultimate combination of your favourite veggies-onion, green capsicum, mushroom",
  },
  {
    title: "Bold BBQ Veggies Pizza",
    price: "₹341",
    body: "Our signature pan sauce, with BBQ Sauce drizzle, topped with mushroom, onion, green capsicum",
  },
  {
    title: "Tandoori Paneer Pizza",
    price: "₹401",
    body: "Its our signature. Spiced paneer, crunchy onions & green capsicum, spicy red paprika",
  },
  {
    title: "Schezwan Margherita Pizza",
    price: "₹415",
    body: "Your very own margherita, now with a spicy twist! Loaded with our signature",
  },
  {
    title: "Corn & Cheese Pizza",
    price: "₹328",
    body: "A combination of juicy sweet corn & 100% mozzarella cheese with flavourful signature sauce",
  },
  {
    title: "Margherita Pizza",
    price: "₹482",
    body: "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese.",
  },
  {
    title: "Cheezy Cheese Veg Pizza",
    price: "₹219",
    body: "Thin & Crispy crust, loaded with Crunchy Onion, Green Capsicum, Red Bell Pepper",
  },
];
// Function to render menu items dynamically
function renderMenu(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear existing content

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    data.forEach((menu, index) => {
        const isInCart = cart.some(cartItem => cartItem.title === menu.title);
        
        const cardHTML = `
        <div class="col-lg-6">
            <div class="d-flex align-items-center">
                <img class="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt="" style="width: 80px;">
                <div class="w-100 d-flex flex-column text-start ps-4">
                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                        <span class="${isInCart ? 'odd-width' : 'even-width'}">${menu.title}</span>
                        <span class="text-primary">${menu.price}</span>
                        <span class="add-cart">
                            ${isInCart ? '' : `<button class="btn btn-link add-to-cart" 
                                data-title="${menu.title}" 
                                data-price="${menu.price}" 
                                onclick="addToCart('${menu.title}', '${menu.price}')">
                                Add
                            </button>`}
                            ${isInCart ? `<button class="btn btn-danger remove-from-cart" 
                                data-title="${menu.title}" 
                                onclick="removeFromCart('${menu.title}')">
                                ❌
                            </button>` : ''}
                        </span>
                    </h5>
                    <small class="fst-italic">${menu.body}</small>
                </div>
            </div>
        </div>
    `;
    
        container.innerHTML += cardHTML;
    });


    // Add event listeners to "Remove" buttons
    document.querySelectorAll(`#${containerId} .remove-from-cart`).forEach(button => {
        button.addEventListener("click", (event) => {
            const title = event.target.getAttribute("data-title");
            removeFromCart(title, containerId);
        });
    });
}

// Function to add item to local storage
document.addEventListener("DOMContentLoaded", function () {
    updateCartUI(); // Ensure UI reflects items in cart
});

function addToCart(title, price) {
    console.log(price);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    let existingItem = cart.find(item => item.title === title);
    
    if (existingItem) {
        return; // Item already added, do nothing
    }

    cart.push({ title, price, quantity: 1 }); // Default quantity = 1
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartUI(); // Refresh UI to show "Added ✅"
}

function removeFromCart(title) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.title !== title); // Remove item
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartUI(); // Refresh UI to show "Add" button again
}

function updateCartUI() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".add-to-cart").forEach(button => {
        let title = button.getAttribute("data-title");

        if (cart.some(item => item.title === title)) {
            button.innerHTML = ' <i class="fa fa-trash"></i>';
            button.classList.add("btn-danger"); // Change button style
            button.onclick = () => removeFromCart(title);
        } else {
            button.innerHTML = "Add";
            button.classList.remove("btn-danger");
            button.onclick = () => addToCart(title, button.getAttribute("data-price"));
        }
    });
}

// Call the function to render menus after the page loads
document.addEventListener("DOMContentLoaded", () => {
  renderMenu(data_1, "menu-1");
  renderMenu(data_2, "menu-2");
  renderMenu(data_3, "menu-3");
});
