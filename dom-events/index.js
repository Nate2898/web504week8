// NOTE

let menu = document.getElementByID('menu')
let items = menu.getElementByClassName('item')

let data = [].map.call(items, item => item.textContent) // map is a method on array prototype 


// let btn = document.getElementById('btnCount')
// btn.addEventListener('click',() => {
//     let hTwoHeader = document.getElementsByTagName('h2')
//     alert(`You have this many H2 tags: ${hTwoHeader.length}`)
// })


// const p = document.getElementById('message');
// console.log(p);
// let btn = document.getElementById('btnRadio');
// let output = document.getElementById('output');

// btn.addEventListener('click', () => {
//     let languages = document.getElementsByName('language');
//      languages.forEach((language) => {
//         if(language.checked) {
//             output.innerText = `You code with : ${language.value}`;
//         }
//      })
// })