
const button = document.getElementById('menubut');
button.addEventListener('click', function() {
  toggleMenu();



function toggleMenu()  {
    const menu = document.getElementById('menu');
    
    if (menu.style.display === "block") {
     menu.style.display = "none"  
    } else {menu.style.display = "block"
    }}
})
    
