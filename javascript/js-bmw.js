let bmwcars = [
  {
    name: "BMW 3 Series",
    category: "Sedan",
    model: 2021,
    color: "Black",
    mileage: "22,000 km",
    price: "$38,000",
    image: "https://i.pinimg.com/1200x/9d/c0/17/9dc017c5318a498d925445b7629c19db.jpg",
  },
  {
    name: "BMW 5 Series",
    category: "Sedan",
    model: 2022,
    color: "White",
    mileage: "18,000 km",
    price: "$48,000",
    image: "https://i.pinimg.com/736x/14/1f/e8/141fe8bcccddd9ad683d524a193af967.jpg",
  },
  {
    name: "BMW 7 Series",
    category: "Sedan",
    model: 2023,
    color: "Grey",
    mileage: "10,000 km",
    price: "$75,000",
    image: "https://i.pinimg.com/736x/8a/31/e6/8a31e6c1e1cc7581539cef03278af1ca.jpg",
  },
  {
    name: "BMW X3",
    category: "SUV",
    model: 2021,
    color: "Blue",
    mileage: "25,000 km",
    price: "$42,000",
    image: "https://i.pinimg.com/1200x/71/46/41/714641409e943eb87b59c1ee10e670b0.jpg",
  },
  {
    name: "BMW X5",
    category: "SUV",
    model: 2022,
    color: "Black",
    mileage: "15,000 km",
    price: "$60,000",
    image: "https://i.pinimg.com/1200x/f7/06/da/f706da2a7278997e910805d15bc7bdc6.jpg",
  },
 
  {
    name: "BMW Z4",
    category: "Sports",
    model: 2021,
    color: "Red",
    mileage: "12,000 km",
    price: "$55,000",
    image: "https://i.pinimg.com/736x/0c/a7/07/0ca7071e66a93397e48ab07d305a9402.jpg",
  }
];

let bmwcars1 = document.getElementById('bmwcars')


function showAll() {
    bmwcars1.innerHTML = '';
    bmwcars.forEach(item => {

        bmwcars1.innerHTML +=

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