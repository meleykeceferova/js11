woodenToys = document.getElementById("woodenToys");

var wdUnits = [
  {
    unit: "Teddy Bear",
    price: 30.0,
    image:
      "/assets/images/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png",
  },
  {
    unit: "Mega Plush Toy",
    price: 38.0,
    image:
      "/assets/images/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png",
  },
  {
    unit: "Cute Dog",
    price: 24.0,
    image:
      "/assets/images/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png",
  },
  {
    unit: "Little Friend",
    price: 27.0,
    image:
      "/assets/images/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png",
  },
];

function renderUnits() {
  wdUnits.forEach(function (item) {
    let card = document.createElement("div");
    card.className = "unitClass col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3";
    card.innerHTML = `
        <img src="${item.image}" alt="">
        <div class="cardTextBox">
          <h5>${item.unit}</h5>
          <p>$${item.price} USD</p>
        </div>
      `;
    woodenToys.appendChild(card);
  });
}

renderUnits();
