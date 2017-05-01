// const setAttributes = (el, attrs) => {
//   for(let key in attrs) {
//     el.setAttribute(key, attrs[key]);
//   }
// }

let rows = getParameterByName('rows'); 
let columns = getParameterByName('columns'); 
let table = document.getElementById('table');
const classes = new Array ('clean', 'dirty');
const length = classes.length;


const initGrid = () => {
 for (let i = rows - 1; i >= 0; i--) {
   const row = document.createElement('tr');
   for (let k = columns - 1, x = 1, y = 1; k >= 0; k--) {
     let cell = document.createElement('td');
    //  setAttributes(cell, { 'data-x': x++, 'data-y': y++ });
    //  add random dirty tiles  
     $(cell).addClass( classes[ Math.floor ( Math.random() * length ) ] );
     row.appendChild(cell)
   };

   table.appendChild(row)
 };
}

window.onload = initGrid();

let active = 0;
$('#table td').each(function(idx){$(this).attr('tabindex', idx);});