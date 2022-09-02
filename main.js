// SELECTORES EN JS
// Para poder leer el contenido de nuestro HTML con JS, podemos utilizar selectores los cuales son funciones que nos provee el entorno de ejecución que estamos utlizando, en este caso Google Chrome, y cada uno lo utilizamos para traer los elemtos del HTML, .querySelector trae los elemtos utilizando la suntanxis de css, .getElementById requiere como atributo el id del elemento que queremos seleccionar etc.
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

// Podemos modificar el HTML desde el JS
// .innerHTML es para modificar el HTML dentro de la etiqueta seleccionada, lo cual es peligroso pq los usuarios pueden ejecutar código malicioso,.innerText solo modifica el texto dentro de la etiqueta seleccionada.

// h1.innerHTML= "Patito <br> Feo";
h1.innerText = "Patito <br> Feo"

// Dar una clase a un elemento, manipular los atributos, .getAttribute nos regresa el valor del atributo de nuestro elemento
console.log(h1.getAttribute("class"));
// .setAttribute modifica el valor del atributo
h1.setAttribute('class', 'rojo');
// .classList es una función que nos permite manipular las clases de nuestros elementos, como añadir una nueva clase o eliminarla 
h1.classList.add('amarillo');
h1.classList.remove('rojo');

input.value = "456";

// Tambiem podemos crear nuevos elementos desde js utilizando la función .createElemet(); 
console.log(document.createElement('span'));
// para que el usuario pueda ver el nuevo elemento lo tenesmos que meter en un elemento ya existente en el HTML

const img = document.createElement('img');
img.setAttribute('src', 'https://m.media-amazon.com/images/I/615UoMEsDEL._AC_SY741_.jpg');
// .append y .appendChils insertan el nuevo codigo despues del ultimo hujo del elemento.
pid.appendChild(img);
img.setAttribute('style', 'width: 100px');

