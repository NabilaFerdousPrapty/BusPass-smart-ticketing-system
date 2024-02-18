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
  if (!buttonClicked[elementId] && seatBookingCount<4) {
    buttonClicked[elementId] = true;
    const element = document.getElementById(elementId);
    element.classList.add("bg-[#1DD100]");
    availableSeat--;
    seatBookingCount++;
    totalPrice = seatBookingCount * oneTicketPrice;
    grandTotal = totalPrice - discountPercentage * totalPrice;
    console.log("Seat reserved successfully for button:", elementId);
    console.log("Available Seats:", availableSeat);
    console.log("Seat Booking Count:", seatBookingCount);
    console.log("Total Price:", totalPrice);
    console.log("Grand Total:", grandTotal);
  }else{
    alert('You cannot buy more than 4 tickets at once')
  }
}

// function removeSelection(elementId) {
//   if (buttonClicked[elementId]) {
//     buttonClicked[elementId] = false;
//     const element = document.getElementById(elementId);
//     element.classList.remove("bg-[#1DD100]");
//      if (seatBookingCount<40) {
//       availableSeat++;
//     seatBookingCount--;
//      }
//     console.log("Seat deselected successfully for button:", elementId);
//     console.log("Available Seats:", availableSeat);
//     console.log("Seat Booking Count:", seatBookingCount);
//     console.log("Total Price:", totalPrice);
//     console.log("Grand Total:", grandTotal);
//   }
// }  
function getValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.value;
  const elementValue = parseInt(elementText);
  return elementValue;
}

const buttons = document.querySelectorAll('.buy-button');
buttons.forEach(function (button) {
    button.addEventListener('click', function(event) {
        const elementId = event.target.id;
        selectingToBuying(elementId);
    });
    // button.addEventListener('dblclick', function(event) {
    //     const elementId = event.target.id;
    //     removeSelection(elementId);
    // });
});
document
  .getElementById("phone-number")
  .addEventListener("keyup", function (event) {
    const number = event.target.value;
    const stringNumber = String(number);
    const numberLength = stringNumber.length;
    const nextButton = document.getElementById("next");
    if (numberLength > 0) {
      nextButton.removeAttribute("disabled");
    } else {
      nextButton.setAttribute("disabled", true);
    }
  });
