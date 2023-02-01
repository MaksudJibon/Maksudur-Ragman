let images2 = ["Images/guitar2.png", "Images/guitar.png"];
  let index2 = 0;
  setInterval(() => {
    document.querySelector(".mid-img3").src = images2[index2];
    index2 = (index2 + 1) % images2.length;
  }, 2000);
