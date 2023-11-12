import "../scss/main.scss";

const carsData = [
  {
    carName: "CR-V",
    carType: "SUV",
    carPrice: "$80",
  },
  {
    carName: "S90",
    carType: "Sedan",
    carPrice: "$65",
  },
];

const gasImage = require("../assets/gas.svg");
const vitesImage = require("../assets/vites.svg");
const peopleImage = require("../assets/people.svg");

const accordionExampleElement = document.querySelector("#carsExample");
const accordionContainer = document.createElement("div");

let accordionItems = "";
carsData.forEach((item, index) => {
  console.log(item);
  accordionItems += `
        <div class="card">
    <div class="card-head">
        <div class="car-name">
          <h4 class="car-model">${item.carName}</h4>
          <h5 class="car-type">${item.carType}</h5>
        </div>
        <i class="fa-solid fa-heart"></i>
      </div>
      <div class="card-main">
        <div class="car-image">
          <!-- <img src="<%= require('../assets/car.png') %>" /> -->
        </div>
        <div class="car-info">
          <div class="car-info-detail">
            <img src="${gasImage}"/>
            <h5 class="car-info-text">80L</h5>
          </div>
          <div class="car-info-detail">
            <img src="${vitesImage}" />
            <h5 class="car-info-text">Manuel</h5>
          </div>
          <div class="car-info-detail">
            <img src="${peopleImage}"/>
            <h5 class="car-info-text">6 People</h5>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="footer-info">
          <h4 class="car-price">${item.carPrice} /</h4>
          <h5 class="car-rent">day</h5>
        </div>
        <div class="footer-button">
          <button class="btn btn-primary btn-sm">Rental Now</button>
        </div>
      </div>
      </div>
  `;
});
//console.log(accordionItems);
accordionContainer.innerHTML = accordionItems;
accordionExampleElement.appendChild(accordionContainer);
URL("");
