var cellBottomLeft = document.querySelector('#bottom-left')
var cellBottomMiddle = document.querySelector('#bottom-middle')
var cellBottomRight = document.querySelector('#bottom-right')
var cellMiddleLeft = document.querySelector('#middle-left')
var cellMiddleBottom = document.querySelector('#middle-bottom')
var cellMiddleRight = document.querySelector('#middle-right')
var cellTopLeft = document.querySelector('#top-left')
var cellTopMiddle = document.querySelector('#top-middle')
var cellTopRight = document.querySelector('#top-right')

var Balls = document.querySelector('#balls')

Balls.addEventListener("mouseover", function() {
    Balls.style.color = 'red';
})

// // Hover (mouseover and mouseout)
cellBottomLeft.addEventListener("mouseover",function(){
  cellBottomLeft.textContent = "your mother's touch is warm";
  cellBottomLeft.style.color = 'black';
})
cellBottomLeft.addEventListener('mouseout',function(){
  cellBottomLeft.textContent = "X";
  cellBottomLeft.style.color = 'black';
})

// // On Click
// var cellState = 0
// cellBottomLeft.addEventListener("click",function(){

//     cellState++
//     if (cellState === 1) {
//         this.textContent = "X";
//         this.style.color = "black";
//     } else if (cellState==2) {
//         this.textContent = "O";
//         this.style.color = "black";
//     } else {
//         this.textContent = "";
//         cellState = 0;
//     }
// })
// cellBottomLeft.addEventListener("click",function(){
//   cellBottomLeft.textContent = "99";
// })