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
let cursor = document.querySelector('.cursor');
let maze = document.querySelectorAll('.mazePath');
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

// let run = setInterval(move, 5000);
// let pos = 0;

//move obstacle
function move() {
    let moved = false;
    moved ? (moved = false, obstacle.style.left = '50vw') : (moved = true, obstacle.style.left = '70vw');
    // (pos >=540) ? clearInterval(run) : pos += 10, (obstacle.style.left = pos + " px;")
}
setInterval(move, 5000)


// console.log(move())


//info button
function displayMsg() {
    console.log('itworks!')
    
}

// //turn into ball
// function ballCursor() {
//     document.addEventListener('mousemove', e => {
//         cursor.setAttribute('style', "top: " + (e.pageY - 25) + 'px; left: ' + (e.pageX - 25) + 'px;')
//     })
    
// }


//collision detection
const detectHit = (value) => {
    if (value === "mazeOne" || value === "mazeTwo" || value === "mazeThree" || value === "mazeFour" || value === "start" || value === "text") {
        console.log('alive')
        document.getElementById("displayMsg").innerHTML = 'Level One -- Game Active'
    } else if (value === "finish"){
        document.getElementById("displayMsg").innerHTML = 'Winner!';
    } else {
        document.getElementById("displayMsg").innerHTML = 'Try Again!';
        window.location.reload()
    }
};
                

                
                
    
function gameStart() {
    //Mouse value
    window.addEventListener("mousemove", (e) => {
        let check = e.target.classList.value;
        //obstacle moves
        move();
        //mouse value checked
        detectHit(check);
    })
    // ballCursor()
    // detectHit()
}

// document.addEventListener("click", e =>{
//     const gameActive = document.querySelector(".start");
//     e = true
//     if (e = true) {
//         //Cursor to Ball
//         document.addEventListener('mousemove', e => {
//             cursor.setAttribute('style', "top: " + (e.pageY - 25) + 'px; left: ' + (e.pageX - 25) + 'px;')
//             // cursor.setAttribute.style.left = (e.pageX - 25) + "px;";
//             // cursor.setAttribute.style.top = (e.pageY - 25) + "px;";
//         })
//         detectHit()
//     } else {
//         document.removeEventListener('mousemove', e => {
//             cursor.setAttribute('style', "top: " + (e.pageY - 25) + 'px; left: ' + (e.pageX - 25) + 'px;')
//         })
//     }
// })
                
// gameActive.addEventListener("click", e => {
//     detectHit()

//  })

//  window.addEventListener("mouseover", (e) => {
//     console.log(e.clientX, e.clientY)
//  });