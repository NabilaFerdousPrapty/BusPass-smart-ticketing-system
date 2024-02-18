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
    totalPrice = seatBookingCount*oneTicketPrice;
    grandTotal = totalPrice - discountPercentage*totalPrice;

    document.getElementById("available").innerText=availableSeat;
    document.getElementById("seat-count").innerText=seatBookingCount;
    document.getElementById("total-price").innerText=totalPrice;
    document.getElementById("grand-total").innerText=grandTotal;
    // console.log("Seat reserved successfully for button:", elementId);
    // console.log("Available Seats:", availableSeat);
    // console.log("Seat Booking Count:", seatBookingCount);
    // console.log("Total Price:", totalPrice);
    // console.log("Grand Total:", grandTotal);
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

document.getElementById("coupon").addEventListener("keyup",function (event) {
  
  const coupon = event.target.value;
  console.log("Coupon entered:", coupon);
  const length=coupon.length;
  console.log("Coupon length:", length);
  const couponBtn=document.getElementById("coupon-btn");
  const discountDiv=document.getElementById("discount-div");
  if (coupon=="New15" || coupon=="Couple 20") {
    couponBtn.removeAttribute("disabled");
    if (coupon=="New15") {
      discountPercentage=.15;
      grandTotal=totalPrice-discountPercentage*totalPrice;
      document.getElementById("grand-total").innerText=grandTotal;
      couponBtn.onclick =discountDiv.classList.add("hidden");
      
     } else if (coupon=="Couple 20") {
      discountPercentage=.20;
      grandTotal=totalPrice-discountPercentage*totalPrice;
      document.getElementById("grand-total").innerText=grandTotal;
      discountDiv.classList.add("hidden");
      
     }else{
      alert("The coupon code does not exist.Please try again")
     }
  }else{
    couponBtn.setAttribute("disabled",true)
  }
})


document
  .getElementById("phone-number")
  .addEventListener("keyup", function (event) {
    const number = event.target.value;
    const stringNumber = String(number);
    const numberLength = stringNumber.length;
    console.log(stringNumber);
    const nextButton = document.getElementById("next");
    if (numberLength > 0) {
      nextButton.removeAttribute("disabled");
    } else {
      nextButton.setAttribute("disabled", true);
    }
  });
