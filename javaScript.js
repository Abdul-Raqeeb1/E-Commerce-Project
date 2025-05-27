function sideBar() {
  let menuBar = document.getElementById("menu-icon");
  let anim1 = document.getElementById("side-bar");
  let text = document.getElementById("side-text");

  
  anim1.classList.remove("animation-open", "animation-close");
  text.classList.remove("text-fade-in", "text-fade-out");

  if (anim1.style.display === "none" || anim1.style.display === "") {
    anim1.style.display = "flex";
    anim1.classList.add("animation-open"); 
    text.classList.add("text-fade-in");    
    menuBar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    anim1.classList.add("animation-close"); 
    text.classList.add("text-fade-out");    
    menuBar.innerHTML = '<i class="fa-solid fa-bars"></i>';

    setTimeout(() => {
      anim1.style.display = "none";
    }, 500);
  }
}

const imagesMobile = ["Images/img6.jpg","Images/img5.webp","Images/img4.webp"]; 
const imageDesktop = ["Images/img1.webp","Images/img2.webp","Images/img3.webp"]; 
let index1 = 0;
let index2 = 0;

function changeImage() {
  const img1 = document.getElementById("slider-image1");
  const img2 = document.getElementById("slider-image2");


  img1.style.opacity = 0;
  img2.style.opacity = 0;

 
  setTimeout(() => {
    index1 = (index1 + 1) % imagesMobile.length;
    img1.src = imagesMobile[index1];
    img1.style.opacity = 1; 
  },1000);

    setTimeout(() => {
    index2 = (index2 + 1) % imageDesktop.length;
    img2.src = imageDesktop[index2];
    img2.style.opacity = 1; 
  }, 1000);
}

setInterval(changeImage, 5000);

 function changeQuantity(amount) {
      const input = document.getElementById('quantity-1');
      let value = parseInt(input.value);
      value += amount;
      if (value < 1) value = 1;
      input.value = value;
    }