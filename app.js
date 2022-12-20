const bill = document.querySelector(".bill");
const tipBtns = document.querySelectorAll(".tip-percent");
const custom = document.querySelector(".custom");
const split = document.querySelector(".split");
const total = document.querySelector(".total-bill");
const tip = document.querySelector(".tip");
const reset = document.querySelector(".btn");
const invalid = document.querySelector(".invalid");

function getAmount() {
  tipBtns.forEach((tipBtn) => {
    tipBtn.addEventListener("click", () => {
      // GET TIP AMOUNTS
      if (tipBtn.textContent === "5%") {
        tip.textContent = `$${parseFloat(
          (0.05 * bill.value) / split.value
        ).toFixed(2)}`;
      } else if (tipBtn.textContent === "10%") {
        tip.textContent = `$${parseFloat(
          (0.1 * bill.value) / split.value
        ).toFixed(2)}`;
      } else if (tipBtn.textContent === "15%") {
        tip.textContent = `$${parseFloat(
          (0.15 * bill.value) / split.value
        ).toFixed(2)}`;
      } else if (tipBtn.textContent === "25%") {
        tip.textContent = `$${parseFloat(
          (0.25 * bill.value) / split.value
        ).toFixed(2)}`;
      } else if (tipBtn.textContent === "50%") {
        tip.textContent = `$${parseFloat(
          (0.5 * bill.value) / split.value
        ).toFixed(2)}`;
      } else if (custom) {
        tip.textContent = `$${parseFloat(
          (custom.value * 0.01 * bill.value) / split.value
        ).toFixed(2)}`;
      }
      // ADD INVALID MESSAGE
      if (split.value === "" || split.value === "0") {
        split.style.border = "solid 2.25px hsl(355, 50%, 54%)";
        invalid.style.display = "inline-block";
      }
      calculateTotal();
    });
  });
}
getAmount();

// GET TOTAL PER PERSON
function calculateTotal() {
  total.textContent = `$${parseFloat(bill.value / split.value).toFixed(2)}`;
}

// REMOVE INVALID MESSAGE
split.addEventListener("focus", () => {
  invalid.style.display = "none";
  split.style.border = "none";
});

// RESET CALCULATOR
reset.addEventListener("click", () => {
  bill.value = "";
  split.value = "";
  tip.textContent = "$0.00";
  total.textContent = "$0.00";
});
