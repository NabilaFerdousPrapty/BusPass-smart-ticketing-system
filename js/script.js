let availableSeat = 40;
let seatBookingCount = 0;
const oneTicketPrice = 550;
let totalPrice = seatBookingCount * oneTicketPrice;
let grandTotal = seatBookingCount * totalPrice;
let discountPercentage = 0;

let buttonClicked = {};

function getElementIdByEvent(event) {
  const element = event.target;
  const elementId = event.target.id;
  selectingToBuying(elementId);
}
function selectingToBuying(elementId) {
  if (!buttonClicked[elementId]) {
    if (seatBookingCount < 4) {
      buttonClicked[elementId] = true;
      const element = document.getElementById(elementId);
      element.classList.add("bg-[#1DD100]");
      element.classList.add("text-white");

      availableSeat--;
      seatBookingCount++;
      totalPrice = seatBookingCount * oneTicketPrice;
      grandTotal = totalPrice - discountPercentage * totalPrice;

      document.getElementById("available").innerText = availableSeat;
      document.getElementById("seat-count").innerText = seatBookingCount;
      document.getElementById("total-price").innerText = totalPrice.toFixed(2);
      document.getElementById("grand-total").innerText = grandTotal.toFixed(2);

      const ticketTable = document.getElementById("ticket-table");
      const newRow = document.createElement("tr");
      const cell1 = document.createElement("td");
      cell1.innerText = elementId;
      const cell2 = document.createElement("td");
      cell2.innerText = "Economy";
      const cell3 = document.createElement("td");
      cell3.innerText = "550";
      newRow.appendChild(cell1);
      newRow.appendChild(cell2);
      newRow.appendChild(cell3);

      ticketTable.querySelector("tbody").appendChild(newRow);
    } else {
      alert("You cannot buy more than 4 tickets at once");
    }
  } 
}

// function removeSelection(elementId) {
//   if (buttonClicked[elementId]) {
//     buttonClicked[elementId] = false;
//     const element = document.getElementById(elementId);
//     element.classList.remove("bg-[#1DD100]");
//     //  if (seatBookingCount<40) {
//     //   availableSeat++;
//     // seatBookingCount--;
//     //  }
//     // console.log("Seat deselected successfully for button:", elementId);
//     // console.log("Available Seats:", availableSeat);
//     // console.log("Seat Booking Count:", seatBookingCount);
//     // console.log("Total Price:", totalPrice);
//     // console.log("Grand Total:", grandTotal);
//   }
// }
function getValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.value;
  const elementValue = parseInt(elementText);
  return elementValue;
}

const buttons = document.querySelectorAll(".buy-button");
buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const elementId = event.target.id;
    selectingToBuying(elementId);
  });
  // button.addEventListener('dblclick', function(event) {
  //     const elementId = event.target.id;
  //     removeSelection(elementId);
  // });
});

document.getElementById("coupon").addEventListener("focus", function (event) {
  const couponInput = event.target;
  couponInput.dataset.previousValue = couponInput.value;
  const couponBtn = document.getElementById("coupon-btn");
  couponBtn.removeAttribute("disabled");
});
document.getElementById("coupon").addEventListener("blur", function (event) {
  const couponInput = event.target;
  const coupon = couponInput.value.trim();
  const previousCoupon = couponInput.dataset.previousValue.trim();
  if (coupon !== previousCoupon) {
    validateCoupon(coupon);
    couponInput.dataset.previousValue = coupon;
  }
});

function validateCoupon(coupon) {
  console.log("Coupon entered:", coupon);
  const length = coupon.length;
  console.log("Coupon length:", length);
  const couponBtn = document.getElementById("coupon-btn");
  const discountDiv = document.getElementById("discount-div");
  if ((coupon == "New15" || coupon == "Couple 20") && seatBookingCount == 4) {
    couponBtn.removeAttribute("disabled");
    if (coupon == "New15") {
      discountPercentage = 0.15;
      grandTotal = totalPrice - discountPercentage * totalPrice;
      document.getElementById("grand-total").innerText =
        parseFloat(grandTotal).toFixed(2);
      const division = document.getElementById("discount-amount");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      h2.innerText = "Discount";
      p.innerText = (discountPercentage * totalPrice).toFixed(2);
      h2.classList.add("text-2xl");
      division.appendChild(h2);
      division.appendChild(p);
      
      division.classList.add(
        "flex",
        "justify-between",
        "items-center",
        "py-6",
        "text-base"
      );
      document.getElementById("coupon").value = " ";
      
        discountDiv.classList.add("hidden");
    } else if (coupon == "Couple 20") {
      discountPercentage = 0.2;
      grandTotal = totalPrice - discountPercentage * totalPrice;
      document.getElementById("grand-total").innerText = grandTotal;
      const division = document.getElementById("discount-amount");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      h2.innerText = "Discount";
      p.innerText = (discountPercentage * totalPrice).toFixed(2);
      h2.classList.add("text-2xl");
      division.appendChild(h2);
      division.appendChild(p);
      division.classList.add(
        "flex",
        "justify-between",
        "items-center",
        "py-6",
        "text-base",
        
      );
      discountDiv.classList.add("hidden");
      document.getElementById("coupon").value = " ";
    } 
  } else if (seatBookingCount != 4) {
    console.log(seatBookingCount);
    alert("Buy at least 4 tickets to avail the coupon");
    document.getElementById("coupon").value = " ";
    
  } else {
    document.getElementById("coupon").value = " ";
    alert("The coupon code does not exist.Please try again");
    
  }
}

document
  .getElementById("passenger-phone")
  .addEventListener("keyup", function (event) {
    const number = event.target.value;
    const stringNumber = String(number);
    const numberLength = stringNumber.length;
    console.log(stringNumber);
  //   document.getElementById("passenger-name").value=" ";
  // document.getElementById("passenger-phone").value=" ";
  // document.getElementById("passenger-email").value=" ";
    const nextButton = document.getElementById("next");
    if (numberLength > 0 && seatBookingCount > 0) {
      nextButton.removeAttribute("disabled");
      
    } else {
      nextButton.setAttribute("disabled", true);
    }
  });
document.getElementById("next").addEventListener("click",function () {
 const name =document.getElementById("passenger-name").value=" ";
  console.log(name);
 const phone= document.getElementById("passenger-phone").value=" ";
 console.log(phone);
 const email= document.getElementById("passenger-email").value=" ";
 console.log(email);
  
})

  function removeBgColorFromButtons() {
    console.log("Removing background color from buttons");
    const buttons = document.querySelectorAll(".buy-button");
    buttons.forEach(function(button) {
      button.classList.remove('bg-[#1DD100]');
      button.classList.remove('text-white')
      
    });
}

function startOver() {
  document.getElementById("available").innerText =40;
  document.getElementById("seat-count").innerText = 0;
  document.getElementById("total-price").innerText = 0;
  document.getElementById("grand-total").innerText = 0;
  document.getElementById("table-body").innerText=" ";
  removeBgColorFromButtons();
 document.getElementById("discount-amount").innerText=" ";
  buttonClicked = {};
  availableSeat=40;
  seatBookingCount=0;
  const nextButton = document.getElementById("next");
  nextButton.setAttribute("disabled", true);
 
  
  document.getElementById("passenger-name").value=" ";
  document.getElementById("passenger-phone").value=" ";
  document.getElementById("passenger-email").value=" ";
  
  

}