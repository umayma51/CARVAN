let toyotacars = [

    {
        name: "Toyota Corolla",
        category: "Sedan",
        model: 2019,
        color: "White",
        mileage: "45,000 km",
        price: "$18,500",
        image: "https://i.pinimg.com/736x/05/74/ea/0574ea503f392b79eb38545f9bf646c0.jpg",
        story: "The owner is upgrading to a newer model and wants to sell this car quickly."
    },
    {
        name: "Toyota Camry",
        category: "Sedan",
        model: 2021,
        color: "Black",
        mileage: "25,000 km",
        price: "$26,000",
        image: "https://i.pinimg.com/1200x/d2/6d/e5/d26de591917a1c368055c9eb2d579373.jpg",
        story: "The owner is relocating to another country and cannot take the car along."
    },
    {
        name: "Toyota Yaris",
        category: "Sedan",
        model: 2020,
        color: "Silver",
        mileage: "30,000 km",
        price: "$16,000",
        image: "https://i.pinimg.com/1200x/90/21/35/902135a6e0e60ea9feff6a5e0f5d9145.jpg",
        story: "The owner needs funds for a family emergency."
    },
    {
        name: "Toyota Fortuner",
        category: "SUV",
        model: 2022,
        color: "White",
        mileage: "20,000 km",
        price: "$42,000",
        image: "https://i.pinimg.com/1200x/f6/88/f6/f688f6a496dd5fe435ca613f78dd7fed.jpg",
        story: "The owner wants to switch to a smaller vehicle for city driving."
    },
    {
        name: "Toyota Prado",
        category: "SUV",
        model: 2021,
        color: "Black",
        mileage: "28,000 km",
        price: "$50,000",
        image: "https://i.pinimg.com/1200x/04/e7/03/04e703d41e08ed59a05bb325563198d5.jpg",
        story: "The owner is selling due to high fuel expenses."
    },
    {
        name: "Toyota Hilux",
        category: "Truck",
        model: 2020,
        color: "Grey",
        mileage: "35,000 km",
        price: "$30,000",
        image: "https://i.pinimg.com/1200x/5e/e6/4a/5ee64a527402e37e049c0ee1625e0cee.jpg",
        story: "The owner no longer needs it for business purposes."
    },
    {
        name: "Toyota Land Cruiser",
        category: "SUV",
        model: 2023,
        color: "White",
        mileage: "15,000 km",
        price: "$75,000",
        image: "https://i.pinimg.com/1200x/e5/ac/52/e5ac5267fd17d1ad053a33b55b183724.jpg",
        story: "The owner is shifting abroad and wants a quick sale."
    }
];


let toyotacars1 = document.getElementById('toyotacars')


function showAll() {
    toyotacars1.innerHTML = '';
    toyotacars.forEach(item => {

        toyotacars1.innerHTML +=

            `
      <div class="card" data-aos="zoom-in">
          <img src="${item.image}">
          <h2>${item.name}</h2>
          <p class="qty">  price: ${item.price} </p>
          <p class="qty">  mileage: ${item.mileage} </p>
          <p class="qty">  color: ${item.color} </p>
          <span class="qty"> category: ${item.category}</span>
   
          <a href="./contact-us.html" class="btn">   contact us</a>
         </div>
      `;
    })
}
showAll();









AOS.init();