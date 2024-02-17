function changeColor(event) {
  const element = event.target; 
  console.log(event.target.id);
  element.classList.add('bg-[#1DD100]');
}

function removeBackgroundColor(event){
  const element = event.target;
  element.classList.remove('bg-[#1DD100]');

}
