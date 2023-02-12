// creare array di img
let frecciaAvanti = document.querySelector(".avanti");
let frecciaIndietro = document.querySelector(".indietro");

let arrayImg = ["./img/foglie.jpg", "./img/lago.jpg", "./img/pianeti.jpg"];
let immagini = document.querySelector(".immagine");

let cerchi = document.querySelector(".box-cerchi");

let i = 0;

arrayImg.forEach((element, c) => {
  let div = document.createElement("div")
div.classList.add("cerchi")
cerchi.appendChild(div);
div.addEventListener("click", function (e) {
  immagini.src = arrayImg[c];
});
});

immagini.src = arrayImg[i];


// al click cambiare immagine
frecciaAvanti.addEventListener("click", function () {
 if(i == arrayImg.length - 1){ 
  i = 0;
 }else{
  i++
 }
  immagini.src = arrayImg[i];
});

frecciaIndietro.addEventListener("click", function () {
  if(i == arrayImg.length - 1){
    i = 0;
   }else{
    i++
   }
    immagini.src = arrayImg[i];
});


