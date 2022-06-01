const submitBtn = document.querySelector(".btn");
const input = document.querySelector(".input");
const slider = document.querySelector(".slider");
const tipPercent = document.getElementById("tip-percent");
const tip = document.getElementById("tip");
const total = document.getElementById("bill");
// event listener for tip slider
slider.addEventListener("input", updateSlider);
// show tip percentage on slider
function updateSlider() {
  tipPercent.textContent = `${slider.value}%`;
}
// calculate tip and total on click of submit button
submitBtn.addEventListener("click", submitBill);

function submitBill() {
  // change bill and slider value to numbers
  const bill = parseFloat(input.value);
  const sliderValue = parseFloat(slider.value);

  // formula to get and display tip dollar amount
  tip.textContent = `$${(sliderValue / 100) * bill.toFixed(2)}`;

  // formula to get and display tip + bill
  total.textContent = `$${(bill + (sliderValue / 100) * bill).toFixed(2)}`;
}
