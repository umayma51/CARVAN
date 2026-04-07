let teslacars = [
  {
    name: "Tesla Model S",
    category: "Sedan",
    model: 2023,
    color: "Red",
    mileage: "8,000 km",
    price: "$90,000",
    image: "https://i.pinimg.com/1200x/ee/66/a6/ee66a6799c1b6cf9d3aecc50d3827e1d.jpg",
   
  },
  {
    name: "Tesla Model 3",
    category: "Sedan",
    model: 2022,
    color: "White",
    mileage: "12,000 km",
    price: "$45,000",
    image: "https://i.pinimg.com/1200x/fe/84/7a/fe847aad7ec76068429212125d025074.jpg",
  },
  {
    name: "Tesla Model X",
    category: "SUV",
    model: 2023,
    color: "Black",
    mileage: "10,000 km",
    price: "$100,000",
    image: "https://i.pinimg.com/736x/d4/26/ae/d426aec590c75e8212495e4ed54821bc.jpg",
  },
  {
    name: "Tesla Model Y",
    category: "SUV",
    model: 2022,
    color: "Blue",
    mileage: "14,000 km",
    price: "$60,000",
    image: "https://i.pinimg.com/1200x/dd/f8/2b/ddf82b796438b4dae2c0eb2ea7266a78.jpg",
  },
  {
    name: "Tesla Cybertruck",
    category: "Truck",
    model: 2023,
    color: "Silver",
    mileage: "5,000 km",
    price: "$70,000",
    image: "https://i.pinimg.com/736x/bc/f0/72/bcf07263f3f2bf87490c65d6d9ed4a5e.jpg",
  },
  {
    name: "Tesla Roadster",
    category: "Sports",
    model: 2022,
    color: "Red",
    mileage: "3,000 km",
    price: "$200,000",
    image: "https://i.pinimg.com/1200x/ab/a4/f4/aba4f4eff177fa6d866565901d0dc1a3.jpg",
    story: "The owner rarely drives it and wants to sell."
  },
 
];

let teslacars1 = document.getElementById('teslacars')


function showAll() {
    teslacars1.innerHTML = '';
    teslacars.forEach(item => {

        teslacars1.innerHTML +=

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