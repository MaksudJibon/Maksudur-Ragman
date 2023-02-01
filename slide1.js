let images = ["Images/skill.png", "Images/skill2.png"];
  let index = 0;
  setInterval(() => {
    document.querySelector(".mid-img2").src = images[index];
    index = (index + 1) % images.length;
  }, 2000);
