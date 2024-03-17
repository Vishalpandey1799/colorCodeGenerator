let leftButton = document.querySelector("#leftBtn");
let RightButton = document.querySelector("#rightBtn");
let codeCopy = document.querySelector("#copyColor");
let body = document.querySelector("body");
let copiedCode = document.querySelector(".copied");
 
let hexColor = "000";
let hexColor2 = "#fff";

 
let randomColors = () =>{
  let hexCode = "0123456789abcdef";
  let colors = "#";
  for(let i = 0; i<6; i++){
    colors += hexCode[Math.floor(Math.random()*16)];
  }

  return colors;
};

console.log(randomColors());

let colorBtn1 = () => {
   hexColor = randomColors();
   console.log(hexColor);
   leftButton.innerText = hexColor;
   body.style.backgroundImage = `linear-gradient(to right , ${hexColor} , ${hexColor2})`;
   codeCopy.innerHTML = `background-image: linear-gradient(to right , ${hexColor},${hexColor2})`;
};

let colorBtn2 = () => {
 hexColor2 = randomColors();
 console.log(hexColor)
 RightButton.innerText = hexColor2;
 body.style.backgroundImage = `linear-gradient(to right , ${hexColor} , ${hexColor2}`;
 codeCopy.innerHTML = `background-image: linear-gradient(to right , ${hexColor}, ${hexColor2})`;
};

leftButton.addEventListener("click", colorBtn1); 
RightButton.addEventListener("click", colorBtn2);
codeCopy.addEventListener("click" , () =>{
  navigator.clipboard.writeText(codeCopy.innerHTML);
   copiedCode.innerText = "Code Copied"
  
});

