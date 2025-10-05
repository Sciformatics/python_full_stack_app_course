var cell1 = document.querySelector('.grid-cell1')
var cell2 = document.querySelector('.grid-cell2')
var cell3 = document.querySelector('.grid-cell3')
var cell4 = document.querySelector('.grid-cell4')
var cell5 = document.querySelector('.grid-cell5')
var cell6 = document.querySelector('.grid-cell6')
var cell7 = document.querySelector('.grid-cell7')
var cell8 = document.querySelector('.grid-cell8')
var cell9 = document.querySelector('.grid-cell9')

var migrants = document.querySelector('.migrants')
var migrantsMusic = document.querySelector('.migrants-music')

// each cell state

var cell1State = 0
var cell2State = 0
var cell3State = 0
var cell4State = 0
var cell5State = 0
var cell6State = 0
var cell7State = 0
var cell8State = 0
var cell9State = 0

// on mouseover and mouseout

migrants.addEventListener("mouseover", function() {
    this.style.color = 'red';
    migrantsMusic.play();
    // migrantsMusic.currentTime = 0;

});

migrants.addEventListener("mouseout", function() {
    migrants.style.color = 'white';
    // migrantsMusic.currentTime = 0;
})



// // On Click

cell1.addEventListener("click",function(){

    cell1State++
    if (cell1State === 1) {
        this.textContent = "X";
        this.style.color = "black";
    } else if (cell1State==2) {
        this.textContent = "O";
        this.style.color = "black";
    } else {
        this.textContent = "";
        cell1State = 0;
    }
});

cell2.addEventListener("click",function(){
    cell2State++;
    if (cell2State === 1) {
        this.textContent = "X";
        this.style.color = "black";
    } else if (cell2State==2) {
        this.textContent = "O";
        this.style.color = "black";
    } else {
        this.textContent = "";
        cell2State = 0;
    }
});

cell3.addEventListener("click",function(){
    cell3State++;
    if (cell3State === 1) {
        this.textContent = "X";
        this.style.color = "black";
    } else if (cell3State==2) {
        this.textContent = "O";
        this.style.color = "black";
    } else {
        this.textContent = "";
        cell3State = 0;
    }
});

cell4.addEventListener("click",function(){
    cell4State++;
    if (cell4State === 1) {
        this.textContent = "X";
        this.style.color = "black";
    } else if (cell4State==2) {
        this.textContent = "O";
        this.style.color = "black";
    } else {
        this.textContent = "";
        cell4State = 0;
    }
});

cell5.addEventListener("click",function(){
    cell5State++;
    if (cell5State === 1) {
        this.textContent = "X";
        this.style.color = "black";
    } else if (cell5State==2) {
        this.textContent = "O";
        this.style.color = "black";
    } else {
        this.textContent = "";
        cell5State = 0;
    }
});

cell6.addEventListener("click",function(){
    cell6State++;
    if (cell6State === 1) {
        this.textContent = "X";
        this.style.color = "black";
    } else if (cell6State==2) {
        this.textContent = "O";
        this.style.color = "black";
    } else {
        this.textContent = "";
        cell6State = 0;
    }
});

cell7.addEventListener("click",function(){
    cell7State++;
    if (cell7State === 1) {
        this.textContent = "X";
        this.style.color = "black";
    } else if (cell7State==2) {
        this.textContent = "O";
        this.style.color = "black";
    } else {
        this.textContent = "";
        cell7State = 0;
    }
});

cell8.addEventListener("click",function(){
    cell8State++;
    if (cell8State === 1) {
        this.textContent = "X";
        this.style.color = "black";
    } else if (cell8State==2) {
        this.textContent = "O";
        this.style.color = "black";
    } else {
        this.textContent = "";
        cell8State = 0;
    }
});

cell9.addEventListener("click",function(){
    cell9State++;
    if (cell9State === 1) {
        this.textContent = "X";
        this.style.color = "black";
    } else if (cell9State==2) {
        this.textContent = "O";
        this.style.color = "black";
    } else {
        this.textContent = "";
        cell9State = 0;
    }
});