/*-------------------------------- Constants --------------------------------*/
const board = 
['' , '' , '' ,
'' , '' , '' ,
'' , '' , ''];

const winComb = 
[0 , 1 , 2 ,
3 , 4 , 5 ,
6 , 7 , 8 ,
0 , 3 , 6 ,
1 , 4 , 7 , 
2 , 5 , 8 ,
0 , 4 , 8 ,
2 , 4 , 6
]; 


/*-------------------------------- Variables --------------------------------*/

let winner = '';
let turn = 'x';

/*------------------------ Cached Element References ------------------------*/
const reset = document.querySelector('#reset');
const squareBox = document.querySelectorAll('.sqr');
const msg = document.querySelector('#message');

/*-------------------------------- Functions --------------------------------*/

const addValue = (item) => {
if (item.target.textContent === '') {
    if (turn === 'x') {
    msg.textContent = `It's X's turn`;
    item.target.textContent = 'x';
    turn = 'o';
    console.log('Box clicked ' , item.target.id);
    // const sqrIndex = item.target.id;
    }else if (turn === 'o') {
        msg.textContent = `It's O's turn`;
        item.target.textContent = 'o';
        turn = 'x';
    }
}else{
    msg.textContent = 'Invalid. Chose a different box';
}

}; 
//for the reset
const removeval = (item) => {
    item.target.textContent = '';
}

/*----------------------------- Event Listeners -----------------------------*/

squareBox.forEach((box) => {
box.addEventListener ('click' , addValue)//we called the function above

    // squareBox.forEach(function(){

    // event.target.textContent = 'x';
    // console.log('Box Clicked' , event.target.id);
});
    



//Event listener for the reset button

// reset.addEventListener ('click' , function(event) {

// squareBox.forEach((box) => {
//     box.addEventListener ()
//     // squareBox.textContent = '';
//     console.log('Reset Clicked');
// });

// });


