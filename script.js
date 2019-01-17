document.addEventListener("DOMContentLoaded", function() {

    let td = document.getElementsByTagName('td');
    let h2 = document.getElementsByTagName("h2");
    let button = document.getElementById("reset");
    let player = true;
    let count = 0;
    
    const wins = [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["0", "4", "8"],
        ["2", "4", "6"]
    ];  

    function input(td) {
        for (let i = 0; i < 9; i++) {
            td[i].addEventListener('click', function(event){
                if(event.target.innerText != "") {
                    return;
                }
                else if(player == true) {
                    event.target.innerText = "X";
                    event.target.setAttribute("class", "X");
                    count++
                    setTimeout(function(){hasWon("X")} , 30)
                    h2[0].innerText = "It is O's turn"; 
                    player = false;
                }
                else {
                    event.target.innerText = "O";
                    event.target.setAttribute("class", "O");
                    count++
                    setTimeout(function(){hasWon("O")} , 30)
                    h2[0].innerText = "It is X's turn"; 
                    player = true;
                }
            }) 
        }
    }

    function newGame(){
        button.addEventListener('click', function(){
            reset();
        })
    }

    function reset() {
        for (let i = 0; i < 9; i++) {
            td[i].innerText = '';
            td[i].setAttribute("class", "clear");
            count = 0;
        }
    }

    function hasWon(xoro) {
        let board = document.getElementsByClassName(xoro);
        let arrXO = [];
        for (let i = 0; i < board.length; i++) {
            arrXO.push(board[i].getAttribute("data-num"));
        }

        for (let i = 0; i < wins.length; i++) {
            if (arrXO.includes(wins[i][0]) && arrXO.includes(wins[i][1]) && arrXO.includes(wins[i][2])) {
                confirm("Winner")
                reset();
                return false;
            }
            else if(count === 9){
                confirm("Draw");
                reset()
            }
        }
        return true;
    }

    input(td);
    newGame();
    //win condition
     
 
})