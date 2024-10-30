const nav= document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav(){
    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
}


document.getElementById('foodForm').addEventListener('submit', function(event) {
    const input = document.getElementById('foodInput').value;
    const foodItems = Array.from(document.querySelectorAll('#foodItems option')).map(option => option.value);

    if (!foodItems.includes(input)) {
      event.preventDefault(); // Prevent form submission
      alert('Please select a valid food item from the list.');
    }
  });