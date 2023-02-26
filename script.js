 let music = new Audio("mixkit-game-level-music-689.wav" );
 let musicturn = new Audio("mixkit-arcade-retro-changing-tab-206.wav" );
 let song = new Audio("mixkit-funny-game-over-2878.wav");
music.play();
let turn = "X";
let isgameover = false;
const changeturn = ()=> {
    return turn === "X" ? "0" : "X"
}
const checkWin = ()=>{
   let boxtext = document.getElementsByClassName("boxtext");
   let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
   ]
   wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
        document.querySelector(".info").innerText = boxtext[e[0]].innerText + "Won"
       isgameover = true
       document.querySelector('.imageinfo').getElementsByTagName('img')[0].style.width = "200px"
       song.play();
    }
   })
   
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click' ,()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeturn();
            musicturn.play();
            checkWin();
            if(!isgameover){
              document.getElementsByClassName("info")[0].innerText = "Turn of" + turn;
            }
          
        }
    })
})
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn of" + turn;
    document.querySelector('.imageinfo').getElementsByTagName('img')[0].style.width = "0"
}
)
