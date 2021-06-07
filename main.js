$(document).keypress(function (e) {

    if (e.which == 119) {
          board.move(1, "up")
    }

})

$(document).keypress(function (e) {

    if (e.which == 115) {
          board.move(1, "down")
    }

})
$(document).keypress(function (e) {

    if (e.which == 97) {
          board.move(1, "left")
    }

})
$(document).keypress(function (e) {

    if (e.which == 100) {
          board.move(1, "right")
    }

})
$(document).keypress(function (e) {

    if (e.which == 56) {
          board.move(2, "up")
    }

})

$(document).keypress(function (e) {

    if (e.which == 50) {
          board.move(2, "down")
    }

})
$(document).keypress(function (e) {

    if (e.which == 54) {
          board.move(2, "right")
    }

})
$(document).keypress(function (e) {

    if (e.which == 52) {
          board.move(2, "left")
    }

})
$(document).on("click",".button" , function() {
   let row =  $('.row').val()
   let col = $('.columns').val()
if(row<5||col<5 ){
    $(".errorNote").empty()
    $(".errorNote").append('<div>Please select minimum 5 rows/columns ')

}
if(row>20||col>20 ){
    $(".errorNote").empty()
    $(".errorNote").append('<div>Please select maximum 20 rows/columns ')

}
if(row<=20&&col<=20&&row>=5&&col>=5){
   board.Matrix(row,col)
   render.renderScore(0,0)

}
})
$(document).on("click",".tryAgain" , function() {
    render.renderStart()
})