//board 
const blockSize = 25; 
const rows = 20;
const cols = 20; 
let board; 
let context; 

//snake head 
let snakeX = blockSize * 5; 
let snakeY = blockSize * 5; 

//snake food 
let foodX;
let foodY;

window.onload = function() { 
    board = document.getElementById('board'); 
    board.height = rows * blockSize; 
    board.width = cols * blockSize; 
    
    context = board.getContext("2d") // used for drawing on the board

    placeFood();
    update();
};


function update() { 
    // style of the board
    context.fillStyle = "black"; 
    context.fillRect(0, 0, board.width, board.height);

    // style of the snake
    context.fillStyle ="lime"; 
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    // style of the food 
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
};

function placeFood() { 
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
};
