
function changeQuantity(amount) {
  const quantityInput = document.getElementById('quantity');
  let current = parseInt(quantityInput.value);
  if (current + amount >= 1) {
    quantityInput.value = current + amount;
  }
}

function changeImage(img) {
  const mainImage = document.getElementById('main-image');
  mainImage.src = img.src;
}
