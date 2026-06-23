/*-------------------------------- Constants --------------------------------*/
const board = 
['' , '' , '' ,
'' , '' , '' ,
'' , '' , ''];

// al winning conditions 
const winComb = [ 
[0 , 1 , 2] ,
[3 , 4 , 5] ,
[6 , 7 , 8] ,
[0 , 3 , 6] ,
[1 , 4 , 7] , 
[2 , 5 , 8] ,
[0 , 4 , 8] ,
[2 , 4 , 6]
]; 


/*-------------------------------- Variables --------------------------------*/

let winner = false;
let turn = 'x';
let tie = false;

/*------------------------ Cached Element References ------------------------*/
const reset = document.querySelector('#reset');
const squareBox = document.querySelectorAll('.sqr');
const msg = document.querySelector('#message');

/*-------------------------------- Functions --------------------------------*/

const checkForWinner = () => {

    winComb.forEach ((item) => {
        // if winComb[0] we check its not empty and if it matches the wincomp 
        if (board[item[0]] !== '' && board[item[0]] === board[item[1]] && board[item[0]] === board[item[2]]) {
            winner = true;
        }

    });

}

const checkForTie = () => {

    if (winner) return;

    //check if board has no empty square
    if (!board.includes('')) {
        tie = true;
    };

};

const addValue = (item) => {
    //so everyytime the function is called we can get the id of the specific square. 
    const indexFill = item.target.id;
    // if winner = true
if (winner) {
    return;// the function will return, or stop
}

if (item.target.textContent === '') {
    if (turn === 'x') {
    msg.textContent = `It's O's turn`;
    item.target.textContent = 'x';
    board[indexFill] = 'x'; // to fill in the empty board array with the played digit to compare it later on.
    turn = 'o';
    console.log('Box clicked ' , item.target.id);
    // const sqrIndex = item.target.id;
    }else if (turn === 'o') {
        msg.textContent = `It's X's turn`;
        item.target.textContent = 'o';
        board[indexFill] = 'o';
        turn = 'x';
    }
}else{
    msg.textContent = 'Invalid. Chose a different box';
}

checkForWinner();
checkForTie();

if (winner) {
    //to reverse the turn for displaying the correct message
    if (turn === 'x') turn = 'O';
    else turn = 'X';
    msg.textContent = (`The winner is : ${turn}`);
}else if (tie) {
    msg.textContent = ('Its A Tie!!!');
};

// console.log(winner);
// console.log(board);
}; 


//for the reset
const removeVal = (item) => {

    //reset all variables
    winner = false;
    turn = 'x';
    tie = false;
    board.fill('');// to empty the board array

    //to rest the message

    msg.textContent = 'Click a box to start playing';
    
    //to reset all the boxes
    squareBox.forEach((item) => {

        item.textContent = '';

    }); 
    
}

/*----------------------------- Event Listeners -----------------------------*/

squareBox.forEach((box) => {
box.addEventListener ('click' , addValue)//we called the function above
});

reset.addEventListener ('click' , removeVal);
    