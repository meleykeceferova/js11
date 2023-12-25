stuffedToys = document.getElementById("stuffedToys");

var stfUnits = [
    {
      unit: "Teddy Bear",
      price: 30.0,
      image:
        "/assets/images/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png",
    },
    {
      unit: "Mega Plush Toy",
      price: 38.0,
      image:
        "/assets/images/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png",
    },
    {
      unit: "Cute Dog",
      price: 24.0,
      image:
        "/assets/images/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png",
    },
    {
      unit: "Little Friend",
      price: 27.0,
      image:
        "/assets/images/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png",
    },
  ];

function renderUnitsw() {
  stfUnits.forEach(function (item1) {
    let card1 = document.createElement("div");
    card1.className = "unitClass1 col-12 col-md-6 col-lg-6 col-xl-3";
    card1.innerHTML = `
        <img src="${item1.image}" alt="">
        <div class="cardTextBox">
          <h5>${item1.unit}</h5>
          <p>$ ${item1.price} USD</p>
        </div>
      `;
    stuffedToys.appendChild(card1);
  });
}
renderUnitsw()