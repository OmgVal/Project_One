/* pseudocode: 
Step 1: once "play" is clicked game will become active
Step 2: game will be active until player either 
    -runs into obstacle -- dies
    -restarts game
    -reaches completes lvl 
Step 3: if player dies make sure to only restart the lvl not the whole game

*/

const body = document.body
const gameActive = document.querySelector(".playBtn");
const endGame = document.querySelector(".restart");

// function plyMove()

// //collision detection
// function detectHit() {
//     const obstacleLeft = ball.x + ball.width >= obstacleLeft.x
//     const obstacleRight = ball.x <= obstacle.x + obstacle.width
//     const obstacleTop = ball.y + ball.height >= obstacle.y
//     const obstacleBottom = ball.y <= obstacle.y + obstacle.height
//     if (obstacleBottom && obstacleLeft && obstacleRight && obstacleRight) {
//         ball.alive = false
//         statusDisplay.innerText = "Game Over!"
//     }
// }

//Draggable Ball
let dragBall;

function move(id) {
    let obj = document.getElementById('ball');
    obj.onmousedown = function() {
    dragBall = obj;
    }
    document.onmouseup = function(e) {
        dragBall = null;
    }
    document.onmousemove = function(e) {
        let x = e.pageX;
        let y = e.pageY;

        dragBall.style.left = x + "px";
        dragBall.style.top = y + "px";
    }
}





