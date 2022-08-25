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
const cursor = document.querySelector('.cursor');
const mazePath = document.querySelectorAll('.maze');
const instructions = document.querySelector('.infoBtn').addEventListener("click", displayMsg);
const obstacle = document.querySelectorAll('.mazeBorder');
const gameState = document.querySelector('.text')
const mouseStart = 

//info button
function displayMsg() {
   console.log('itworks!')

}

document.addEventListener("click", e =>{
    screenX 
    e = true
    if (e = true) {
        //Cursor to Ball
        document.addEventListener('mousemove', e => {
            cursor.setAttribute('style', "top: " + (e.pageY - 25) + 'px; left: ' + (e.pageX - 25) + 'px;')
            // cursor.setAttribute.style.left = (e.pageX - 25) + "px;";
            // cursor.setAttribute.style.top = (e.pageY - 25) + "px;";
        })

    } else {
        document.removeEventListener('mousemove', e => {
            cursor.setAttribute('style', "top: " + (e.pageY - 25) + 'px; left: ' + (e.pageX - 25) + 'px;')
        })
    }

    while (e = true) {
    }

    console.log('start!')
})


//collision detection
function detectHit() {
    const obstacleLeft = cursor.x + cursor.width >= obstacle.x
    const obstacleRight = cursor.x <= obstacle.x + obstacle.width
    const obstacleTop = cursor.y + cursor.height >= obstacle.y
    const obstacleBottom = cursor.y <= obstacle.y + obstacle.height
    if (obstacleBottom && obstacleLeft && obstacleTop && obstacleRight) {
        cursor.alive = true
        console.log('alive')
     } else {
        console.log('lost')
     }
}
// console.log(detectHit())

// //Draggable Ball
// let dragBall;

// function move(id) {
    //     let obj = document.getElementById('ball');
    //     obj.onmousedown = function() {
        //         dragBall = obj;
        //     }
        //     document.onmouseup = function(e) {
            //         dragBall = null;
            //     }
            //     document.onmousemove = function(e) {
                //         let x = e.pageX;
                //         let y = e.pageY;
                
                //         dragBall.style.left = x + "px;";
                //         dragBall.style.top = y + "px;";
                //     }
                // }
                
                
 
                
gameActive.addEventListener("click", e => {
    detectHit()

 })

 window.addEventListener("mouseover", (e) => {
    console.log(e.clientX, e.clientY)
 })

//  change cursor loc upon starting game to inside maze -- click on maze starts game