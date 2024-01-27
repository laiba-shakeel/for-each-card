const products = [
    {
        "id": 4,
        "title": "newTitle",
        "price": 205,
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "image_url": "./images/img1.jpeg"
    },
    {
        "id": 7,
        "title": "Ergonomic Wooden Tuna",
        "price": 743,
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "image_url": "./images/img-02.jpeg"
    },
    {
        "id": 9,
        "title": "Electronic Bronze Chips",
        "price": 808,
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "image_url": "./images/img3.jpeg"
    },
    {
        "id": 11,
        "title": "Awesome Bronze Car",
        "price": 382,
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "image_url": "./images/img4.jpeg"
    },
    {
        "id": 12,
        "title": "Recycled Rubber Cheese",
        "price": 30,
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "image_url": "./images/omg5.jpeg"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const productCardsContainer = document.getElementById('productCards');

    products.forEach(product => {
        const cardHtml = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image_url}" class="card-img-top" alt="${product.title}" style="width: 100%; height: 200px;">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">Price: $${product.price}</p>
                    </div>
                </div>
            </div>
        `;
        productCardsContainer.innerHTML += cardHtml;
    });
});
