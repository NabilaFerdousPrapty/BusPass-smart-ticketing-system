const availableSeat=40;
const seatBookingCount=0;
const oneTicketPrice=550;
const totalPrice=seatBookingCount*oneTicketPrice;
const grandTotal=seatBookingCount*totalPrice;

function selectingToBuying(event) {
  const element = event.target; 
  console.log(event.target.id);
  element.classList.add('bg-[#1DD100]');

 
  
}

function removeSelection(event){
  const element = event.target;
  element.classList.remove('bg-[#1DD100]');

}
function getValueById(elementId) {
 const element= document.getElementById(elementId);
 const elementText=element.value ;
 const elementValue=parseInt(elementText);
 return elementValue;
}

function buyingTicket() {
 
}
document.getElementById('phone-number').addEventListener('keyup',function (event) {
  const number=event.target.value;
  const stringNumber=String(number);
  const numberLength=stringNumber.length;
  const nextButton=document.getElementById('next')
  if (numberLength>0) {
      nextButton.removeAttribute('disabled')
  }else{
      nextButton.setAttribute('disabled',true)
  }

})