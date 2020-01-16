const imagesAsStrings = [
  "https://www.w3schools.com/css/img_forest.jpg",
  "https://www.w3schools.com/css/img_5terre.jpg",
  "https://www.w3schools.com/css/img_forest.jpg",
  "https://www.w3schools.com/css/img_lights.jpg",
  "https://www.w3schools.com/css/img_mountains.jpg"
]

const imagesAsObjects = [
  {
    title: "Forest",
    img: "https://www.w3schools.com/css/img_forest.jpg"
  },
  {
    title: "5 terre",
    img: "https://www.w3schools.com/css/img_5terre.jpg"
  },
  {
    title: "Northern lights",
    img: "https://www.w3schools.com/css/img_lights.jpg"
  },
  {
    title: "Montains",
    img: "https://www.w3schools.com/css/img_mountains.jpg"
  }
]

const contenedor = document.getElementById("container");

let tarjeta = ""

for (let i = 0; i < imagesAsObjects.length; i++) {
tarjeta += `<div class="card">
<img src="${imagesAsObjects[i].img}" alt="${imagesAsObjects[i].title}">
<div class="desc">${imagesAsObjects[i].title}</div>
</div>`  
  
}

contenedor.innerHTML = tarjeta
  
  
  