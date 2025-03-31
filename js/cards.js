const cardData = [
    {
        title : "Haribhavanam",
        text : "Chettinad, Chinese, North Indian, South Indian, Seafood, Biryani, Desserts, Beverages.",
        image : "images/image3.jpg",
        link : "/orders.html"
    },
    {
        title : "Guru Amudhas",
        text : "South Indian, North Indian, Chinese, Saravanampatti, Coimbatore",
        image : "images/image3.jpg",
        link : "/orders.html"
    },
    {
        title : "Pizza Hut",
        text : "Freshly baked Pizzas, Pasta, Burgers, Wraps, Sandwiches, Salads, Beverages",
        image : "images/image3.jpg",
        link : "/orders.html"
    },
    {
        title : "Dominoz",
        text : "Pizza, Pasta, Salads, Beverages, Chicken wings, Veg and Non-veg Pizza",
        image : "images/image3.jpg",
        link : "/orders.html"
    },
    {
        title : "KFC",
        text : "Freshly baked Chicken wings, Beverages, French Fries, Nuggets, Sandwiches",
        image : "images/image3.jpg",
        link : "/orders.html"
    },
    {
        title : "Hotel Chola",
        text : "South Indian, North Indian, Chinese, Saravanampatti, Coimbatore",
        image : "images/image3.jpg",
        link : "/orders.html"
    },
    {
        title : "Chinese Wok",
        text : "Chinese, Momos, Sri Gowtham Complex, Mettupalayam Road, Sivanadha Colony, Coimbatore",
        image : "images/image3.jpg",
        link : "/orders.html"
    },
    {
        title : "Sree Annapoorna",
        text : "South Indian, North Indian, Chinese, Beverages, Mettupalayam Road,",
        image : "./images/image3.jpg",
        link : "/orders.html"
    }
]
function renderCards() {
    const container = document.getElementById("card-container");
    container.innerHTML = ""; // Clear existing content

    cardData.forEach((card, index) => {
        const cardHTML = `
            <div class="col-lg-3 my-3" >
                <div class="card shadow-sm" style="width: 19rem">
                    <img src="${card.image}" class="card-img-top" alt="Image">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.text}</p>
                        <button class="btn btn-primary" onclick="window.location.href='${card.link}'">Order Now</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Call the function to render cards after the page loads
document.addEventListener("DOMContentLoaded", renderCards);
