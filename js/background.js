let images=["N0.jpg","N1.jpg","N2.jpg","N4.jpg","N5.jpg"];



const chosenImage=images[Math.floor(Math.random() * images.length)];


document.body.style.background=`url("./img/${chosenImage}") no-repeat center center/cover, rgba(0, 0, 0, 0.1)`;
document.body.style.backgroundBlendMode='multiply;';