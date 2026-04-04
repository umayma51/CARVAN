
function resetDropdown() {
  document.getElementById("preownedSelect").value = "";
}
function resetSearchbar() {
  document.getElementById("search").value = "";
}





let preowned = [



  {
    name: "Toyota Camry",
    model: 2019,
    color: "Blue",
    mileage: "40,000 km",
    price: "$23,000",
    category: "Sedan",
    image: "https://www.toyotadirect.com/blogs/3084/wp-content/uploads/2023/02/used_camry-1024x768.jpeg",
    story: "The owner loved this car but recently switched to an electric vehicle."

  },

  {
    name: "Honda City",
    model: 2018,
    color: "Silver",
    mileage: "47,000 km",
    price: "$13,000",
    category: "Sedan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_oP-tn1iFx2hek7ZIWSLpJsnu7b6fJnP-DA&s",
    story: "This car was used mostly for weekend drives. The owner now prefers public transport."
  },



  {
    name: "Toyota Yaris",
    model: 2020,
    color: "Black",
    mileage: "29,000 km",
    price: "$15,500",
    category: "suv",
    image: "https://images.olx.com.pk/thumbnails/600350877-400x300.jpeg",
    story: "The owner is moving to a city where parking space is limited, so they decided to sell."
  },
  {
    name: "Toyota Corolla",
    category: "Sedan",
    image: "https://i.pinimg.com/1200x/a1/e2/46/a1e246c8dee618e5d9037a22359670eb.jpg",
    model: 2018,
    color: "White",
    mileage: "45,000 km",
    price: "$14,500",
    story: "The owner used this car mainly for daily office travel. Recently he got a company vehicle, so he decided to sell this well-maintained Corolla."
  },

  {
    name: "Honda Civic",
    category: "Sedan",
    model: 2019,
    color: "Black",
    mileage: "38,000 km",
    price: "$18,000",
    image: "https://images.olx.com.pk/thumbnails/604373288-400x300.jpeg",
    story: "This Civic was owned by a young professional who took great care of it. He is moving abroad for work and needs to sell the car."
  },

  {
    name: "Suzuki Swift",
    category: "hatchback",
    model: 2017,
    color: "Red",
    mileage: "52,000 km",
    price: "$9,500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvB8Xq0twVmSqF1pWx1uVGxuYGk9_MphQ5ow&s",
    story: "The owner mostly used the car for city driving. Since the family has grown, they now need a bigger SUV."
  },

  {
    name: "Hyundai Elantra",
    category: "Sedan",
    model: 2020,
    color: "Silver",
    mileage: "30,000 km",
    price: "$20,500",
    image: "https://platform.cstatic-images.com/large/in/v2/18a38759-3e16-5216-b999-883a2d1e9f94/735dfd63-8bb5-4078-be59-c30bcbf0a5ae/4NjJRKb-qxK4Da66jqaK2AiHQKs.jpg",
    story: "The car is in excellent condition. The owner is planning to upgrade to a luxury sedan."
  },

  {
    name: "Kia Sportage",
    category: "suv",
    model: 2021,
    color: "Grey",
    mileage: "25,000 km",
    price: "$28,000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6a2t_4WwmnAJQ3YweqSuBvZMgbgcfVtwhRg&s",
    story: "The owner bought this SUV for family trips but recently relocated to another country."
  },

  {
    name: "Toyota Camry",
    category: "Sedan",
    model: 2019,
    color: "Blue",
    mileage: "40,000 km",
    price: "$23,000",
    image: "https://www.toyotadirect.com/blogs/3084/wp-content/uploads/2023/02/used_camry-1024x768.jpeg",
    story: "The owner loved this car but recently switched to an electric vehicle."
  },

  {
    name: "Honda City",
    category: "Sedan",
    model: 2018,
    color: "Silver",
    mileage: "47,000 km",
    price: "$13,000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_oP-tn1iFx2hek7ZIWSLpJsnu7b6fJnP-DA&s",
    story: "This car was used mostly for weekend drives. The owner now prefers public transport."
  },

  {
    name: "Suzuki Alto",
    category: "hatchback",
    model: 2021,
    color: "White",
    mileage: "15,000 km",
    price: "$6,500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQia19Y2LOEGRrre0J09X3MkxCFd7ox3Bq8Ow&s",
    story: "The owner bought this as a temporary car while learning to drive and is now upgrading."
  },

  {
    name: "Toyota Yaris",
    category: "Sedan",
    model: 2020,
    color: "Black",
    mileage: "29,000 km",
    price: "$15,500",
    image: "https://images.olx.com.pk/thumbnails/600350877-400x300.jpeg",
    story: "The owner is moving to a city where parking space is limited, so they decided to sell."
  },
  {
    name: "Honda Accord",
    category: "Sedan",
    model: 2020,
    color: "White",
    mileage: "28,000 km",
    price: "$24,000",
    image: "https://i.pinimg.com/1200x/c3/b3/e4/c3b3e45af517ec8799d34d80e5cb1d71.jpg",
    story: "The owner recently lost his job and needs to manage urgent financial expenses, so he is forced to sell this car."
  },

  {
    name: "Toyota Fortuner",
    category: "suv",
    model: 2021,
    color: "Black",
    mileage: "35,000 km",
    price: "$45,000",
    image: "https://i.pinimg.com/736x/98/0d/62/980d6225c0e09573f06d3449545c30e5.jpg",
    story: "Due to shifting abroad on short notice, the owner has to sell this SUV quickly."
  },

  {
    name: "Suzuki Wagon R",
    category: "hatchback",
    model: 2019,
    color: "Silver",
    mileage: "40,000 km",
    price: "$8,000",
    image: "https://i.pinimg.com/736x/cc/c4/5a/ccc45a175766aba184692ffd1aeda8e8.jpg",
    story: "The owner is facing financial difficulties and needs immediate cash, so the car is up for sale."
  },

  {
    name: "Kia Picanto",
    category: "hatchback",
    model: 2022,
    color: "Yellow",
    mileage: "12,000 km",
    price: "$10,500",
    image: "https://i.pinimg.com/1200x/b7/a4/e4/b7a4e4db0fbb4fc40e8db95bd39e9531.jpg",
    story: "Medical emergency in the family forced the owner to sell this almost new car."
  },

  {
    name: "Hyundai Tucson",
    category: "suv",
    model: 2021,
    color: "White",
    mileage: "22,000 km",
    price: "$32,000",
    image: "https://i.pinimg.com/736x/e7/26/82/e72682e85597dc7594af1daabe90d0a6.jpg",
    story: "The owner is under financial pressure due to business loss and has to sell the vehicle."
  },

  {
    name: "Toyota Prado",
    category: "suv",
    model: 2018,
    color: "White",
    mileage: "60,000 km",
    price: "$50,000",
    image: "https://i.pinimg.com/1200x/ff/b3/fd/ffb3fd21bb5aa722ce0735b3d267e735.jpg",
    story: "Due to heavy maintenance costs and financial constraints, the owner is selling this luxury SUV."
  },

  {
    name: "Honda BR-V",
    category: "suv",
    model: 2019,
    color: "Grey",
    mileage: "37,000 km",
    price: "$16,500",
    image: "https://i.pinimg.com/736x/1b/f8/35/1bf835e9bd463326fd4fb4df042ab4e0.jpg",
    story: "The owner needs funds for a family wedding and decided to sell the car."
  },

  {
    name: "Daihatsu Mira",
    category: "hatchback",
    model: 2017,
    color: "Blue",
    mileage: "55,000 km",
    price: "$7,000",
    image: "https://i.pinimg.com/1200x/e0/b2/cc/e0b2cc43960947786b3d5f78e629db61.jpg",
    story: "Due to increasing household expenses, the owner is selling this car to manage costs."
  },

  {
    name: "Nissan Altima",
    category: "Sedan",
    model: 2020,
    color: "Red",
    mileage: "33,000 km",
    price: "$22,000",
    image: "https://i.pinimg.com/1200x/a4/b9/47/a4b947897a97b0ac1063a798c2082f3a.jpg",
    story: "The owner has urgent loan repayments and needs to sell the car quickly."
  }


];



let preowned1 = document.getElementById('preowned');
let select = document.getElementById('preownedSelect');

// populate brand dropdown
let category = [];
preowned.forEach(item => {
  if (!category.includes(item.category))
    category.push(item.category);
});
category.forEach(cat => {
  let option = document.createElement('option');
  option.value = cat;
  option.text = cat;
  select.appendChild(option);
});

// show all items
function showAll() {
  preowned1.innerHTML = '';
  preowned.forEach(item => {

    preowned1.innerHTML +=

      `
      <div class="card" data-aos="zoom-in">
          <img src="${item.image}">
          <h2>${item.name}</h2>
          <span class="qty">category: ${item.category}</span>
        



          <button class="detail" 
           onclick="showDetails(this)"
            price="${item.price}"
           mileage="${item.mileage}"
           color="${item.color}"
             
              reason="${item.story}">
                        details
                         </button>



        </div>
      `;
  });
  resetDropdown();
  resetSearchbar();
}
showAll();

// search filter
function filter() {
  let query = document.getElementById('search').value.toLowerCase();
  let filtered = preowned.filter(item => item.name.toLowerCase().includes(query));
  if (filtered.length === 0) {
    preowned1.innerHTML = '<h2 style="text-align:center;color:white;margin-top:88px;font-size:28px">Nothing found :(</h2>';
    return;
  }
  preowned1.innerHTML = '';


  filtered.forEach(item => {
    preowned1.innerHTML +=

      `
      <div class="card" data-aos="zoom-in">
          <img src="${item.image}">
          <h2>${item.name}</h2>
          <span class="qty">category: ${item.category}</span>
        



          <button class="detail" 
           onclick="showDetails(this)"
            price="${item.price}"
           mileage="${item.mileage}"
           color="${item.color}"
             
              reason="${item.story}">
                        details
                         </button>


                         
        </div>
      `;
  });
}

// dropdown filter by category
select.addEventListener('change', function () {
  let category = select.value;


  if (category === '') { showAll(); return; }




  let filtered = preowned.filter(item => item.category === category);

  preowned1.innerHTML = '';

  filtered.forEach(item => {

    preowned1.innerHTML += `
      <div class="card" data-aos="zoom-in">
          <img src="${item.image}">
          <h2>${item.name}</h2>
          <span class="qty">category: ${item.category}</span>
        



          <button class="detail" 
           onclick="showDetails(this)"
            price="${item.price}"
           mileage="${item.mileage}"
           color="${item.color}"
             
              reason="${item.story}">
                        details
                         </button>


                         
        </div>
      `;

  });
});


// yeh popup k liye
function showDetails(button) {

  let card = button.parentElement;

  let img = card.getElementsByTagName("img")[0].src;
  let name = card.getElementsByTagName("h2")[0].innerText;

  let price = button.getAttribute("price");
  let mileage = button.getAttribute("mileage");
  let color = button.getAttribute("color");
  let category = button.getAttribute("category");
  let reason = button.getAttribute("reason");

  document.getElementById("modalImg").src = img;
  document.getElementById("modalName").innerText = name;
  document.getElementById("modalPrice").innerText = "Price: " + price;
  document.getElementById("modalMileage").innerText = "Mileage: " + mileage;
  document.getElementById("modalColor").innerText = "Color: " + color;

  document.getElementById("modalStory").innerText = "Reason: " + reason;


  let modal = new bootstrap.Modal(document.getElementById('carModal'));
  modal.show();
}



function download() {
  let preowned = document.querySelector('.modal-content');

  html2pdf()
    .from(preowned)
    .save('car-details.pdf');
}
console.log(document.querySelector('.modal-content').innerHTML);







AOS.init();
