
const render = new Renderer()
render.renderStart()
let coinLeft
let validator = function (mat, ro, co, coinFromMatrix) {
    coinLeft = coinFromMatrix
    if (mat[0][1] == "b" && mat[1][0] == "b") {
        mat[0][1] = "."
        mat[1][0] = "."
        console.log("open blocked spider");
    }

    if (mat[ro - 2][co - 1] == "b" && mat[ro - 1][co - 2] == "b") {
        mat[ro - 2][co - 1] = "."
        mat[ro - 1][co - 2] = "."
        console.log("open blocked cat");

    }

    if(mat[0][co-1]=="c"&&mat[0][co-2]=="b"&&mat[1][co-1]=="b"){
        mat[0][co-2]="."
        mat[1][co-1]="."
        console.log("open blocked coin upright corner");

    }
    if(mat[ro-1][0]=="c"&&mat[ro-2][0]=="."&&mat[ro-1][0]=="b"){
        mat[ro-2][0]=="."
        mat[ro-1][1]=="."
        console.log("open blocked coin lower left corner");

    }
    for (let i1 = 0; i1 < ro - 1; i1++) {
        for (let j1 = 0; j1 < co - 1; j1++) {

            if (i1 !== 0 && j1 !== 0 & i1 !== ro - 1 && j1 !== co - 1) {
                if (mat[i1][j1] == "c" && mat[i1 - 1][j1] == "b" && mat[i1 + 1][j1] == "b" && mat[i1][j1 - 1] == "b" && mat[i1][j1 + 1] == "b") {
                    mat[i1][j1] = "."
                    console.log("turn inside blocked coin to space");
                    coinLeft--
                }
            }

            if (j1 !== 0) {
                if (mat[0][j1] == "c" && mat[0][j1 + 1] == "b" && mat[0][j1 - 1] == "b" && mat[1][j1] == "b") {
                    console.log("open blocked coin in upper wall");
                    mat[1][j1] = "."
                    coinLeft--
                }
                if (mat[ro - 1][j1] == "c" && mat[ro - 1][j1 + 1] == "b" && mat[ro - 1][j1 - 1] == "b" && mat[ro - 2][j1] == "b") {
                    console.log("open blocked coin in lower wall");
                    mat[ro - 2][j1] = "."
                    coinLeft--

                }

            }
            if (i1 !== 0) {
                if (mat[i1][0] == "c" && mat[i1 + 1][0] == "b" && mat[i1 - 1][0] == "b" && mat[i1][1] == "b") {
                    console.log("open blocked coin in left wall");
                    mat[i1][1] = "."
                    coinLeft--

                }
                if (mat[i1][co - 1] == "c" && mat[i1 + 1][co - 1] == "b" && mat[i1 - 1][co - 1] == "b" && mat[i1][co - 2] == "b") {
                    console.log("open blocked coin in right wall");
                    mat[i1][co - 2] = "."
                    coinLeft--

                }

            }
        }

    }
    console.log(mat);
    render.renderBoard(mat)
    return coinLeft
}

class goldRush {
    constructor() {
        this.player1Score = 0
        this.player2Score = 0
        this.matrix = []
        this.coin = 0
        this.game = false
    }


    Matrix(r, c) {
        this.matrix = []
        this.player1Score = 0
        this.player2Score = 0
        this.game = true 
        $(".score").empty()

        let star = "."
        let coinNumPro = function (row, col) {
            let multiple = row * col
            let c = multiple * 0.3
            return c
        }
        let blockNumPro = function (row, col) {
            let multiple = row * col
            let b = multiple * 0.15
            return b
        }

        let coinNum = coinNumPro(r, c)
        this.coin = coinNum
        let blockNum = blockNumPro(r, c)

        for (let i = 0; i < r; i++) {
            this.matrix.push([])
            for (let j = 0; j < c; j++) {
                this.matrix[i].push(star)
            }

        }
        this.matrix[0][0] = 1
        this.matrix[r - 1][c - 1] = 2

        while (0 < coinNum) {
            let newR = r
            let newC = c
            let randomRowPos = Math.floor(Math.random() * newR)
            let randomColPos = Math.floor(Math.random() * newC)
            if (this.matrix[randomRowPos][randomColPos] !== 1 && this.matrix[randomRowPos][randomColPos] !== 2 && this.matrix[randomRowPos][randomColPos] !== "c") {
                this.matrix[randomRowPos][randomColPos] = "c"
                coinNum--
            }
        }
        while (0 < blockNum) {
            let newR = r
            let newC = c
            let randomRowPos = Math.floor(Math.random() * newR)
            let randomColPos = Math.floor(Math.random() * newC)
            if (this.matrix[randomRowPos][randomColPos] !== 1 && this.matrix[randomRowPos][randomColPos] !== 2 && this.matrix[randomRowPos][randomColPos] !== "b" && this.matrix[randomRowPos][randomColPos] !== "c") {
                this.matrix[randomRowPos][randomColPos] = "b"
                blockNum--
            }
        }

        let startCoin = this.coin
        let NumCoinLeft = validator(this.matrix, r, c, startCoin)
        console.log(NumCoinLeft);
        this.coin = NumCoinLeft
        console.log(this.coin);
        render.renderBoard(this.matrix)
        return this.matrix

    }






    print() {


        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let i2 = 0; i2 < this.matrix[i].length; i2++)
                line += this.matrix[i][i2] + "\t"
            console.log(line);
        }
    }





    move(player, direction) {
        let rPosition
        let cPosition
        this.matrix.length

        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (player == this.matrix[i][j]) {
                    rPosition = i
                    cPosition = j
                }



            }
        }
        if (direction == "down" && rPosition !== this.matrix.length - 1 && this.matrix[rPosition + 1][cPosition] !== 2 && this.matrix[rPosition + 1][cPosition] !== 1 && this.matrix[rPosition + 1][cPosition] !== "b") {
            if (this.matrix[rPosition + 1][cPosition] == "c") {
                if (player == 1) {
                    this.player1Score += 10
                    render.renderScore(this.player1Score, this.player2Score)

                }
                if (player == 2) {
                    this.player2Score += 10
                    render.renderScore(this.player1Score, this.player2Score)

                }
                this.coin--
                console.log(this.coin);
            }
            
            this.matrix[rPosition][cPosition] = "."
            this.matrix[rPosition + 1][cPosition] = player
            
                
            
        }
        if (direction == "up" && rPosition !== 0 && this.matrix[rPosition - 1][cPosition] !== 2 && this.matrix[rPosition - 1][cPosition] !== 1 && this.matrix[rPosition - 1][cPosition] !== "b") {
            if (this.matrix[rPosition - 1][cPosition] == "c") {
                if (player == 1) {
                    this.player1Score += 10
                    render.renderScore(this.player1Score, this.player2Score)

                }
                if (player == 2) {
                    this.player2Score += 10
                    render.renderScore(this.player1Score, this.player2Score)

                }
                this.coin--
                console.log(this.coin);
            }
            this.matrix[rPosition][cPosition] = "."
            this.matrix[rPosition - 1][cPosition] = player
            
        }
        if (direction == "left" && cPosition != 0 && this.matrix[rPosition][cPosition - 1] !== 2 && this.matrix[rPosition][cPosition - 1] !== 1 && this.matrix[rPosition][cPosition - 1] !== "b") {
            if (this.matrix[rPosition][cPosition - 1] == "c") {
                if (player == 1) {
                    this.player1Score += 10
                    render.renderScore(this.player1Score, this.player2Score)

                }
                if (player == 2) {
                    this.player2Score += 10
                    render.renderScore(this.player1Score, this.player2Score)

                }
                this.coin--
                console.log(this.coin)
            }
            this.matrix[rPosition][cPosition] = "."
            this.matrix[rPosition][cPosition - 1] = player
           
        }

        if (direction == "right" && cPosition != this.matrix[rPosition].length - 1 && this.matrix[rPosition][cPosition + 1] !== 2 && this.matrix[rPosition][cPosition + 1] !== 1 && this.matrix[rPosition][cPosition + 1] !== "b") {
            if (this.matrix[rPosition][cPosition + 1] == "c") {
                if (player == 1) {
                    this.player1Score += 10
                    render.renderScore(this.player1Score, this.player2Score)

                }
                if (player == 2) {
                    this.player2Score += 10
                    render.renderScore(this.player1Score, this.player2Score)

                }
                this.coin--
                console.log(this.coin);
            }
            this.matrix[rPosition][cPosition] = "."
            this.matrix[rPosition][cPosition + 1] = player
            
        }
        if (this.coin <= 0&&this.game == true) {
            
            if (this.player1Score > this.player2Score) {
                this.game = false
                render.renderCrabWin()
            }
            if (this.player1Score < this.player2Score) {
                this.game = false
                render.renderCatWin()
            }
            if (this.player1Score == this.player2Score) {
                this.game = false
                render.renderTie()
            }
        }
        if(this.coin>0&&this.game==true){
                      render.renderBoard(this.matrix)
        }
    }


}






const board = new goldRush()

