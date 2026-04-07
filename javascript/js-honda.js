let hondacars = [
  {
    name: "Honda Civic",
    category: "Sedan",
    model: 2021,
    color: "Black",
    mileage: "28,000 km",
    price: "$24,000",
    image: "https://i.pinimg.com/1200x/21/23/62/212362433fb2d4bda7eefdd1ed0b8297.jpg",
    story: "The owner wants to upgrade to a newer sports model."
  },
  {
    name: "Honda City",
    category: "Sedan",
    model: 2020,
    color: "White",
    mileage: "35,000 km",
    price: "$18,000",
    image: "https://i.pinimg.com/736x/05/73/a4/0573a45091a482b491dfcdecd9f5b6f6.jpg",
    story: "The owner needs funds for personal expenses."
  },
  {
    name: "Honda Accord",
    category: "Sedan",
    model: 2022,
    color: "Grey",
    mileage: "20,000 km",
    price: "$30,000",
    image: "https://i.pinimg.com/1200x/fd/ff/ec/fdffecc6e2aef095dff99f30ee9fd1f7.jpg",
    story: "The owner is relocating abroad and selling urgently."
  },
  {
    name: "Honda BR-V",
    category: "SUV",
    model: 2021,
    color: "Silver",
    mileage: "32,000 km",
    price: "$22,000",
    image: "https://i.pinimg.com/736x/89/c3/e3/89c3e39fd0e68ed3d963069b771a2524.jpg",
    story: "The owner is switching to a larger SUV."
  },
  {
    name: "Honda HR-V",
    category: "SUV",
    model: 2023,
    color: "Red",
    mileage: "15,000 km",
    price: "$27,000",
    image: "https://i.pinimg.com/736x/92/1e/0e/921e0e2b1d6c5dc974e6d7d9add73c3c.jpg",
    story: "The owner is selling due to financial reasons."
  },
  {
    name: "Honda CR-V",
    category: "SUV",
    model: 2022,
    color: "Blue",
    mileage: "22,000 km",
    price: "$34,000",
    image: "https://i.pinimg.com/736x/b0/a2/61/b0a26137e02119170acee25ebbc0a21c.jpg",
    story: "The owner wants to shift to an electric vehicle."
  },

];

let hondacars1 = document.getElementById('hondacars')


function showAll() {
    hondacars1.innerHTML = '';
    hondacars.forEach(item => {

        hondacars1.innerHTML +=

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