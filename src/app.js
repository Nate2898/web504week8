const main = document.getElementById('main') // main div 
const addUserBtn = document.getElementById('add-user') // add user button
const doubleBtn = document.getElementById('double') // double money button
const showMillionairesBtn = document.getElementById('show-mill1onaires') // show millionaires button
const sortBtn = document.getElementById('sort') // sort button
const calculateWealthBtn = document.getElementById('calculate-wealth') // calculate wealth button

let data = [] // array of objects


//random user function
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json()

    const user = data.results[0] // get the first user from the array

    const newUser = { 
        name: `${user.name.first} ${user.name.last}`, // get the first and last name
        money: Math.floor(Math.random() * 1000000) // get a random number between 0 and 1 million
    }
}  
//sort
function sortByRichest() {
    data.sort((a, b) => b.money - a.money) // sort the array from richest to poorest
}

//updateDOM
function updateDOM(){
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>' // add a heading to the main div
}

addUserBtn.addEventListener('click' , getRandomUser) // add user button event listener