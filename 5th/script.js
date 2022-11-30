const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = []; //initialize Array

// Fetch random user and add money
async function getRandomUser() {
  //Fetch itu Sync
  //jadi gini async itu harus wait dlu untk jadi Sync.
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  //console.log(data.results[0])
  const user = data.results[0]; //utk global-used

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  //console.log(newUser) //object bs di-console.log()

  addData(newUser);
}

//Add new obj to data Arr
//data yg dimaksudkan disini adl 'initialize Array'
function addData(obj) {
  data.push(obj);

  updateDOM();
}

//!-- potong akses disini --
//Update DOM
function updateDOM(providedData = data) {
  //Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach((item) => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element); //element disini adl update ke-3 line diatas
  });
}

//Format number as money
//https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
function formatMoney(number) {
  //yg akan dimanipulasi
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//*Double everyones money
// pakai special func 'spread operator'
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 }; //data[0].money * 2
  });

  updateDOM();
}

//Sort
//hanya mengurutkan data sj
function sortNumber() {
  data.sort((a, b) => b.money - a.money); //data.money

  updateDOM();
}

//filter
//data = jika menginginkan modifikasi data yg ada
function richest() {
  data = data.filter((user) => user.money > 1000000);

  updateDOM();
}

//calculation
function calculation() {
  const wealth = data.reduce((acc, user) => acc + user.money, 0);

  console.log(formatMoney(wealth));

  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEl);
}

//Event listeners
addUserBtn.addEventListener('click', getRandomUser); //('click',function-Name)
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortNumber);
showMillionairesBtn.addEventListener('click', richest);
calculateWealthBtn.addEventListener('click', calculation);

getRandomUser();
getRandomUser();
getRandomUser();
