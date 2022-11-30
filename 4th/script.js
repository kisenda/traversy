const currencyEl_one = document.getElementById('currency-one')
const amountEl_one = document.getElementById('amount-one')
const currencyEl_two = document.getElementById('currency-two')
const amountEl_two = document.getElementById('amount-two')
const  rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')


// Fetch exchange rate and update the DOM
function calculate(){
  // fetch('item.json')
  //   .then(res=>res.json())
  //   .then(data => document.body.innerHTML = data[0].text)
  //console.log('it RAN')
  const currency_one = currencyEl_one.value 
  const currency_two = currencyEl_two.value

  console.log(currency_one, currency_two)
   

  fetch(`https://v6.exchangerate-api.com/v6/5c89a6ec02eced2b58b97782/latest/USD`)
    .then(res => res.json()).then(data => {
      //console.log(data)
      const rate = data.conversion_rates[currency_two] //index

      console.log(rate)

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2) 
    })
}


//Even Listener
currencyEl_one.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_two.addEventListener('input', calculate)


swap.addEventListener('click', () => {
 // const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value
 // currencyEl_two = temp;
  calculate()

})


calculate()