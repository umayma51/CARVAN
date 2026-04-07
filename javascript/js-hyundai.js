let hyundaicars = [
  {
    name: "Hyundai Elantra",
    category: "Sedan",
    model: 2021,
    color: "White",
    mileage: "30,000 km",
    price: "$19,500",
    image: "https://i.pinimg.com/736x/65/9d/c0/659dc09e80654245b53358feab61345e.jpg",
   
  },
  {
    name: "Hyundai Sonata",
    category: "Sedan",
    model: 2022,
    color: "Black",
    mileage: "20,000 km",
    price: "$24,000",
    image: "https://i.pinimg.com/736x/25/20/ac/2520ac035c44184ef164d4050ea84998.jpg",
   
  },
  {
    name: "Hyundai Tucson",
    category: "SUV",
    model: 2021,
    color: "Silver",
    mileage: "25,000 km",
    price: "$28,000",
    image: "https://i.pinimg.com/1200x/93/8e/a0/938ea04713fa32b10b3e902228b59907.jpg",
   
  },
  {
    name: "Hyundai Santa Fe",
    category: "SUV",
    model: 2023,
    color: "Blue",
    mileage: "12,000 km",
    price: "$35,000",
    image: "https://i.pinimg.com/1200x/5c/bc/9f/5cbc9ffbfdcd482b95aa9ee5b665830b.jpg",
    story: "The owner is upgrading to the latest model."
  },
  {
    name: "Hyundai Kona",
    category: "SUV",
    model: 2022,
    color: "Red",
    mileage: "18,000 km",
    price: "$26,000",
    image: "https://i.pinimg.com/1200x/98/fb/bc/98fbbc6de618f5276140716b33118998.jpg",
    story: "The owner is switching to an electric vehicle."
  },
  {
    name: "Hyundai Palisade",
    category: "SUV",
    model: 2023,
    color: "White",
    mileage: "10,000 km",
    price: "$45,000",
    image: "https://i.pinimg.com/1200x/83/a0/dd/83a0dda9f9135df5a0edcab90a750624.jpg",
    story: "The owner is moving abroad."
  },
 
];

let hyundaicars1 = document.getElementById('hyundaicars')


function showAll() {
    hyundaicars1.innerHTML = '';
    hyundaicars.forEach(item => {

        hyundaicars1.innerHTML +=

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