// Будемо створювати палітру кольорів
// з можливістю вибрати колір по кліку і відображенням обраного кольору.
//
// повісимо один слухач на загального предка div.color-palette.
// В обробнику події кліка використовуємо event.target,
// щоб отримати елемент, на якому відбулася подія і пов'язаний з ним колір,
// який будемо зберігати в атрибуті data-color.
const container = document.querySelector('.color-palette')
console.log(container);



function createItems(){
    let items = []
    for (let i = 0; i < 36; i++) {
        const element = document.createElement('button')
        const color = getRandomHexColor()
        console.log(color);
        element.style.backgroundColor = color
        element.classList.add('item')
        items.push(element)
    }
    container.append(...items)
}

createItems()


function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
  
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}