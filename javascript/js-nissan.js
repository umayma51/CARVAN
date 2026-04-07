let nissancars = [
  {
    name: "Nissan Altima",
    category: "Sedan",
    model: 2020,
    color: "Red",
    mileage: "33,000 km",
    price: "$22,000",
    image: "https://i.pinimg.com/1200x/a4/b9/47/a4b947897a97b0ac1063a798c2082f3a.jpg",
    story: "The owner has urgent loan repayments and needs to sell the car quickly."
  },
  {
    name: "Nissan Sunny",
    category: "Sedan",
    model: 2019,
    color: "White",
    mileage: "40,000 km",
    price: "$15,500",
    image: "https://i.pinimg.com/1200x/a4/50/d2/a450d2b1d6bf950c528f3b46f8b78450.jpg",
    story: "The owner is upgrading to a newer model."
  },
  {
    name: "Nissan Sentra",
    category: "Sedan",
    model: 2021,
    color: "Black",
    mileage: "25,000 km",
    price: "$20,000",
    image: "https://i.pinimg.com/1200x/7c/2c/77/7c2c776c94af7d93f310a2a11f6f317b.jpg",
    story: "The owner is relocating abroad."
  },
  {
    name: "Nissan X-Trail",
    category: "SUV",
    model: 2022,
    color: "Silver",
    mileage: "18,000 km",
    price: "$28,000",
    image: "https://i.pinimg.com/1200x/3c/02/3d/3c023d07870efc29f57e545f1a9f38b5.jpg",
    story: "The owner wants a smaller car for daily commute."
  },
  {
    name: "Nissan Rogue",
    category: "SUV",
    model: 2023,
    color: "Blue",
    mileage: "12,000 km",
    price: "$32,000",
    image: "https://i.pinimg.com/1200x/88/21/1a/88211a595953160c72f14c9c2454b559.jpg",
    story: "The owner is shifting to an electric vehicle."
  },
  {
    name: "Nissan Patrol",
    category: "SUV",
    model: 2021,
    color: "White",
    mileage: "27,000 km",
    price: "$55,000",
    image: "https://i.pinimg.com/736x/e8/68/16/e8681669c3050ca7fd0578132f0c8e11.jpg",
    story: "The owner is selling due to high maintenance costs."
  },

];

let nissancars1 = document.getElementById('nissancars')


function showAll() {
    nissancars1.innerHTML = '';
    nissancars.forEach(item => {

        nissancars1.innerHTML +=

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