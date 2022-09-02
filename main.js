/*  
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
*/

/*
// ESCUCHAR EVENTOS

// Eventos, son las acciones del programa como por ejemplo, hacer click o hacer doble click en una carpeta para abrirla. 
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.getElementById('result');

// Podemos escuhar los eventos de distintas manera, el primero es colocar como atributo en las etiquetas HTML onchange para saber si el usuario cmabio el contenido de la caja, y onclick para sabe que el usuario hizo click en un boton y ejecutar el evento, podemos ejecutar código JS en el propio atributo pero es mala practica, asi que tenemos que crear una función en el archivo js.

function btnOnClick() {
    let firstInput= Number(input1.value);
    let secondInput= Number(input2.value);
    let r = firstInput + secondInput;
    // console.log(firstInput + secondInput);
    result.innerText= `El resultado de la suma es ${r}`;
}
// Con la herramienta .addEventListener() podemos utilizar solo el el archivos JS para escuchar los eventos, y dejar nuestro HTML limpio de código JS.
btn.addEventListener('click', btnOnClick);
*/

//EVENTO SUBMIT en botones de los formularios
// Los formularios por defecto, usa los botones como tipo submit lo que causa que al mometo de dar click sobre el boton, se recarga toda la página, y oara evitar eso debemos utilzar el argumento event que nos manda como argumento el evento submit, y utilizar el metodo .preventDefault() lo que invalida el comportamiento por defecto del submit de recargar la página, recarga la página pq muestra la info de un formulario en la url.
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.getElementById('result');
const form = document.querySelector('#form');

function sumarInputValues(event) {
    // console.log(event);
    event.preventDefault();
    let firstInput= Number(input1.value);
    let secondInput= Number(input2.value);
    let r = firstInput + secondInput;
    // console.log(firstInput + secondInput);
    result.innerText= `El resultado de la suma es ${r}`;
}

form.addEventListener('submit', sumarInputValues);