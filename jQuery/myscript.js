// $('h1').click(function() {
//     console.log('There was a click')
// })

// $('h1').click(function() {
//     $(this).text("I was changed")
// })

// $('input').eq(0).keypress(function() {
//     $('h3').toggleClass('turnBlue');
// })

//keypress

// $('input').eq(0).keypress(function(event) {
//     console.log(event);
// })

// $('input').eq(0).keypress(function(event) {
//     if (event.which === 13) {
//         $('h3').toggleClass('turnBlue'); //which shows us the number of the key being pressed, e.g. a == 97
//     }
// })

// on method

// $('h1').on('dblclick', function() {
//     $(this).toggleClass('turnBlue');
// })

// $('h1').on('mouseenter', function() {
//     $(this).toggleClass('turnBlue');
// })

$('h1').on('mouseover', function() {
    $(this).toggleClass('turnBlue');
})


//animations and effects

// $('input').eq(1).on('click', function() {
//     $('.container').fadeOut(3000) //in milliseconds
// })

$('input').eq(1).on('click', function() {
    $('.container').slideUp(3000) //in milliseconds
})