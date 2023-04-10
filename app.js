const colorInput = document.querySelector('#seed-color');
const predefinedColors = document.querySelector('#predefined-colors');
const form = document.querySelector('#form');
const colorData = document.querySelector('.color-data');
const hexCode = document.querySelector('.hex-code');

function getColor() {
  form.addEventListener('submit', (e) => {
    const selectedColor = colorInput.value.substring(1);
    const predeColors = predefinedColors.value;

    const info = {
      name: selectedColor,
      mode: predeColors,
    };

    let html = ``;
    let htmlHex = ``;

    fetch(
      `https://www.thecolorapi.com/scheme?named=false&hex=${info.name}&mode=${info.mode}&count=5`
    )
      .then((req) => req.json())
      .then((data) => {
        let dataArry = data.colors;

        dataArry.map((colorHex) => {
          htmlHex += `<div class="hex-value"> ${colorHex.hex.value}</div>`;
        });

        html = `
           
            <img class="imgo" src="${data.image.named}" alt="color">
             
      
               
                `;

        colorData.innerHTML = html;
        hexCode.innerHTML = htmlHex;
      });

    e.preventDefault();
  });
}

getColor();
