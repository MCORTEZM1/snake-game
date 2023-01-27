//board 
const blockSize = 25; 
const rows = 20;
const cols = 20; 
let board; 
let context; 

//snake head 
let snakeX = blockSize * 5; 
let snakeY = blockSize * 5; 

let velocityX = 0; 
let velocityY = 0; 

//snake food 
let foodX;
let foodY;

window.onload = function() { 
    board = document.getElementById('board'); 
    board.height = rows * blockSize; 
    board.width = cols * blockSize; 
    
    context = board.getContext("2d") // used for drawing on the board

    placeFood();
    document.addEventListener('keyup', changeDirection); 
    // update paints on the canvas and needs to be called multiple times for repaint
    // update();
    setInterval(update, 1000/10) // every 100 milliseconds it will update
};


function update() { 
    // style of the board
    context.fillStyle = "black"; 
    context.fillRect(0, 0, board.width, board.height);

    // style of the food 
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    // style of the snake
    context.fillStyle ="lime"; 
    snakeX += velocityX * blockSize; 
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
};

function changeDirection(e) { 
    if (e.code == "ArrowUp") { 
        velocityX = 0; 
        velocityY = -1; 
    };
    if (e.code == "ArrowDown") { 
        velocityX = 0; 
        velocityY = 1; 
    };
    if (e.code == "ArrowLeft") { 
        velocityX = -1; 
        velocityY = 0; 
    };
    if (e.code == "ArrowRight") { 
        velocityX = 1; 
        velocityY = 0; 
    };
};

function placeFood() { 
    
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
};
