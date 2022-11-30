const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie') 



populateUI()


let ticketPrice = parseInt(movieSelect.value);  
                   //parseInt function || +movieSelect.value
                   //mengubah string mjd number


console.log(typeof ticketPrice)



//Seat click event
container.addEventListener('click', function(e){
   // console.log(e.target.classList.contains('seat'))

    if(e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ){
        e.target.classList.toggle('selected')
        
        updateSelectedCount()
    }  
})


//Update total & count
function updateSelectedCount(){
    const selectedSeats =  document.querySelectorAll('.row .seat.selected')

    //console.log(selectedSeats)

    //--------------------------------
    // Copy selected seats into array
    // Map through array
    // return a new array indexes
    // ------------------------------

    const seatsIndex = [...selectedSeats].map(seat =>[...seats].indexOf(seat))
    console.log(seatsIndex)  //ini mengindeks seat didalam array

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))


    const selectedSeatsCount = selectedSeats.length;
    console.log(selectedSeatsCount)

    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice

}

//Movie select event
movieSelect.addEventListener('change', function(e){
    ticketPrice = +e.target.value
  //console.log(e.target.selectedIndex, e.target.value)
    setMovieData(e.target.selectedIndex, e.target.value)


    updateSelectedCount()
})

//Save selected movie index and price
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex )
    localStorage.setItem('selectedMoviePrice', moviePrice)
}


//Get daya from localstorage and populate UI
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))

    console.log(selectedSeats)

    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected')
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex
    }
}

//selectedIndex  -> utk memilih index


//initial count and total set
updateSelectedCount()