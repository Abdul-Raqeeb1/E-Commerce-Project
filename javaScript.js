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

const imagesMobile = ["Images/img6.jpg", "Images/img5.webp", "Images/img4.webp"];
const imageDesktop = ["Images/img1.webp", "Images/img2.webp", "Images/img3.webp"];
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
  }, 1000);

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

function cardMaker() {
  const container = document.getElementById('product-box-2');

  const product = [
    {
      title: "Series 9 Ultra (7 in 1)",
      price: "Rs.3,200.00",
      oldPrice: "6,400.00",
      image: "Images/product3-removebg-preview.png"
    },
    {
      title: "HW69 Ultra 2",
      price: "10,000.00",
      oldPrice: "12,600.00",
      image: "Images/product4-removebg-preview.png"
    },
    {
      title: "Used Mobile",
      price: "5,000.00",
      oldPrice: "10,000.00",
      image: "Images/product5-removebg-preview.png"
    },
    {
      title: "Cooling Fans",
      price: "3,000.00",
      oldPrice: "6,000.00",
      image: "Images/product6-removebg-preview.png"
    },
    {
      title: "Apple EarBuds",
      price: "3,000.00",
      oldPrice: "6,000.00",
      image: "Images/product1-removebg-preview.png"
    }
  ];


  product.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card-box-2';
    card.innerHTML = `
         <div class="icon-box-1">
        <a href="" class="icons-4"><i class="fa-regular fa-heart"></i></a>
      </div>
      <a href="" class="images-3">
        <img src="${product.image}" alt="Error" class="images-3-1">
      </a>
      <a href="" class="para-4">
        <p>${product.title}</p>
      </a>
      <div class="para-box-1">
        <p class="para-5">${product.price}</p>
        <p class="para-6"><s>${product.oldPrice}</s></p>
      </div>
      `;

    container.appendChild(card);
  })

}

function img1() {
  let images1 = document.getElementById('main-image-1');
  images1.innerHTML = `<img src="Images/EarBuds/resized_71d7e593-b788-46a1-ac44-9123ba6d1ac8.webp" alt="Error" class="images-4">`

  document.getElementById('style-1').style.border = '2px solid black';
  document.getElementById('style-2').style = 'none'
  document.getElementById('style-3').style = 'none'
  document.getElementById('style-4').style = 'none'
  document.getElementById('style-5').style = 'none'
  document.getElementById('style-6').style = 'none'

}

function img2() {
  let images2 = document.getElementById('main-image-1');
  images2.innerHTML = `<a href="#main-image-1"><img src="Images/EarBuds/s-l1600.webp" alt="EarBuds" class="images-4"></a>`

  document.getElementById('style-2').style.border = '2px solid black';
  document.getElementById('style-1').style = 'none'
  document.getElementById('style-3').style = 'none'
  document.getElementById('style-4').style = 'none'
  document.getElementById('style-5').style = 'none'
  document.getElementById('style-6').style = 'none'

}

function img3() {
  let images3 = document.getElementById('main-image-1');
  images3.innerHTML = `<a href="#main-image-1"><img src="Images/EarBuds/s-l1600_1.webp" alt="EarBuds" class="images-4"></a>`

  document.getElementById('style-3').style.border = '2px solid black';
  document.getElementById('style-1').style = 'none'
  document.getElementById('style-2').style = 'none'
  document.getElementById('style-4').style = 'none'
  document.getElementById('style-5').style = 'none'
  document.getElementById('style-6').style = 'none'

}
function img4() {
  let images4 = document.getElementById('main-image-1');
  images4.innerHTML = `<a href="#main-image-1"><img src="Images/EarBuds/s-l1600_2.webp" alt="EarBuds" class="images-4"></a>`

  document.getElementById('style-4').style.border = '2px solid black';
  document.getElementById('style-1').style = 'none'
  document.getElementById('style-3').style = 'none'
  document.getElementById('style-2').style = 'none'
  document.getElementById('style-5').style = 'none'
  document.getElementById('style-6').style = 'none'

}
function img5() {
  let images5 = document.getElementById('main-image-1');
  images5.innerHTML = `<a href="#main-image-1"><img src="Images/EarBuds/s-l1600_3.webp" alt="EarBuds" class="images-4"></a>`

  document.getElementById('style-5').style.border = '2px solid black';
  document.getElementById('style-1').style = 'none'
  document.getElementById('style-3').style = 'none'
  document.getElementById('style-2').style = 'none'
  document.getElementById('style-4').style = 'none'
  document.getElementById('style-6').style = 'none'

}
function img6() {
  let images6 = document.getElementById('main-image-1');
  images6.innerHTML = `<a href="#main-image-1"><img src="Images/EarBuds/s-l1600_4.webp" alt="EarBuds" class="images-4"></a>`

  document.getElementById('style-6').style.border = '2px solid black';
  document.getElementById('style-1').style = 'none'
  document.getElementById('style-2').style = 'none'
  document.getElementById('style-3').style = 'none'
  document.getElementById('style-4').style = 'none'
  document.getElementById('style-5').style = 'none'

}

function buttonBox1(){
  let btn1 = document.getElementById('btn-3');

  btn1.style.backgroundColor = 'black';
  btn1.style.color = 'white';

    document.getElementById('btn-4').style.backgroundColor = 'white'
  document.getElementById('btn-4').style.color = 'black'

  document.getElementById('para-9').innerText = 'Color : White';

}

function buttonBox2(){
  let btn2 = document.getElementById('btn-4');

  btn2.style.backgroundColor = 'black';
  btn2.style.color = 'white'

  document.getElementById('btn-3').style.backgroundColor = 'white'
  document.getElementById('btn-3').style.color = 'black'


  document.getElementById('para-9').innerText = 'Color : Black';
}