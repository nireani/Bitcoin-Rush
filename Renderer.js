class Renderer{

    renderBoard(matrix){

      $('.header').empty()
      $('.restart').empty()
       $(".errorNote").empty()
        $('.container').empty()
        matrix.forEach(m => {
           m.forEach(r=>{
             let  width= 92/m.length
             let height=37/matrix.length
             if(r=="c"){
                $('.container').append(`<div class="box" style="height: ${height}em; width: ${width}em"><div><i class="fab fa-bitcoin"></i></div></div>`)

             }
             if(r=="."){
                $('.container').append(`<div class="box" style="height: ${height}em; width: ${width}em"></div>`)

             }
             if(r=="b"){
                $('.container').append(`<div id="block" class="box" style="height: ${height}em; width: ${width}em"></div>`)

             }
             if(r==1){
                $('.container').append(`<div class="box" style="height: ${height}em; width: ${width}em"><div><i class="fas fa-pastafarianism"></i></div></div>`)

             }
             if(r==2){
                $('.container').append(`<div class="box" style="height: ${height}em; width: ${width}em"<div><i class="fas fa-cat"></i></div></div>`)

             }
           }) 
           $('.container').append(`<br>`)
        });
      

    }

    renderScore (scorePlayer1,scorePlayer2){
        $(".score").empty()
        $(".score").append(`<div class="scoreNum"><div><i class="fas fa-pastafarianism"></i>${scorePlayer1}       <span><i class="fas fa-cat"></i>  ${scorePlayer2}</span></div>`)
    
    }
    renderStart(){
      $(".score").empty()
      $('.restart').empty()
      $('.container').empty()
      $('.container').append('<div class="instructions"><h1>BitcoinRush - 2 Players Desktop Game using Matrix</h1> <br><h2> Grab the bitcoin until you win <br><br><br> <i class="fas fa-pastafarianism"></i> moves : <br><br>W - move up <br>S - move down<br> A - move left <br> D - move right <br><br><br> <i class="fas fa-cat"></i> moves(arrow keyboard)<br><br>8 - move up <br> 2 - move down <br> 4 - move left <br>6 - move right<br><br><br>Insert dimensions above and start game </h2> </div>')
$('.header').append('<div>Select board dimensions<input class="row" placeholder="insert rows"><input class="columns" placeholder="insert columns"><input class="button" type="button" value="Start Game"></div>')

    }
    renderCatWin(){
      $(".score").empty()
      $('.container').empty()
      $('.header').empty()
      $('.container').append('<div class="catWin"><h1>Cat Win</h1></div>')
      $('.restart').append('<button class="tryAgain"> Try again</button>')


    }
    renderCrabWin(){
      $(".score").empty()
      $('.container').empty()
      $('.container').append('<div class="crabWin"><h1>Crab Win</h1></div>')
      $('.restart').append('<button class="tryAgain"> Try again</button>')


    }
    renderTie(){
      $(".score").empty()
      $('.container').empty()
      $('.container').append('<div class="tie"></div>')
      $('.restart').append('<button class="tryAgain"> Try again</button>')


    }
}

 


