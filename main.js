/* pseudocode: 
Step 1: once "play" is clicked game will become active
Step 2: game will be active until player either 
    -runs into obstacle -- dies
    -restarts game
    -reaches completes lvl 
Step 3: if player dies make sure to only restart the lvl not the whole game

*/

const body = document.body
const openModalBtn = document.querySelectorAll('[data-modal-target]')
const closeModalBtn = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
let endGame = document.querySelector(".restart");
let cursor = document.querySelector('.cursor');
let mazePath = document.querySelector('.maze');
// let instructions = document.querySelector('.infoBtn').addEventListener("click", displayMsg);
let obstacle = document.querySelector('.obstacle');
let gameState = document.querySelector('.text')


//Modal
openModalBtn.forEach(button => {
    button.addEventListener('click', () =>{
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalBtn.forEach(button => {
    button.addEventListener('click', () =>{
        const modal = button.closest('.infoBox')
        closeModal(modal)
    })
});

function openModal(modal) {
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


//move obstacle
function move() {
    let moved = false;
    moved = false ? (obstacle.style.left = '50vw') : (moved = true, obstacle.style.left = '70vw');
}
setInterval(move, 2000)


//info button
function displayMsg() {
    console.log('itworks!')
    
}

//collision detection
const detectHit = (value) => {
    console.log(mazePath.classList.value, value)
    const mazeClass = mazePath.classList.value
    // console.log(value)
    if (value === obstacle) {
        console.log('dead')
    } else{
        // gameOver()
        console.log('Game Over')

    };
    if (value === "finish") {
        console.log('finish')
    };
    // const obstacleLeft = cursor.x + cursor.width >= obstacle.x
    // const obstacleRight = cursor.x <= obstacle.x + obstacle.width
    // const obstacleTop = cursor.y + cursor.height >= obstacle.y
    // const obstacleBottom = cursor.y <= obstacle.y + obstacle.height
    // if (obstacleBottom && obstacleLeft && obstacleTop && obstacleRight) {
    //     cursor.alive = true
    //     console.log('alive')
    // } else {
    //     console.log('lost')
    // }
};

//turn into ball
function ballCursor() {
    document.addEventListener('mousemove', e => {
        cursor.setAttribute('style', "top: " + (e.pageY - 25) + 'px; left: ' + (e.pageX - 25) + 'px;')
        let check = e.target.classList.value;
        detectHit(check);
    })
    
}



// //Game Over
// function gameOver {
    //     if 
    // }
    
    
//  window.addEventListener("mousemove", e => {
//         let check = e.target.classList.value;
//         detectHit(check);
// })
    
function gameStart() {
    move()
    ballCursor()
    // detectHit()
}

console.log(detectHit())

document.addEventListener("click", e =>{
    const gameActive = document.querySelector(".start");
    e = true
    if (e = true) {
        //Cursor to Ball
        document.addEventListener('mousemove', e => {
            cursor.setAttribute('style', "top: " + (e.pageY - 25) + 'px; left: ' + (e.pageX - 25) + 'px;')
            // cursor.setAttribute.style.left = (e.pageX - 25) + "px;";
            // cursor.setAttribute.style.top = (e.pageY - 25) + "px;";
        })
        detectHit()
    } else {
        document.removeEventListener('mousemove', e => {
            cursor.setAttribute('style', "top: " + (e.pageY - 25) + 'px; left: ' + (e.pageX - 25) + 'px;')
        })
    }
})



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