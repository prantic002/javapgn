const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
const startcell = [
    "", "", "", "", "", "", "", "", ""
];

let go = 'circle'
infoDisplay.textContent = "circle goes first";

function createBoard(){
    startcell.forEach((_cell,index) =>{
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click', addGo)
        gameBoard.append(cellElement)
    })
}
createBoard()

function addGo(e){
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === 'circle' ? 'cross' : 'circle';
    infoDisplay.textContent = 'it is now' + go + "'s go.";
    e.target.removeEventListener("click", addGo)
    checkscore()
}

function checkscore(){
    const allsquares = document.querySelectorAll(".square")
    const winningcombo = [
        [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ]
    winningcombo.forEach(array => {
       let circlewins = array.every(cell => allsquares[cell].firstChild?.classList.contains("circle"))
       if(circlewins){
        infoDisplay.textContent = "circle wins!"
        allsquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        return
       }
    })

    winningcombo.forEach(array => {
        let crosswins = array.every(cell => allsquares[cell].firstChild?.classList.contains("cross"))
        if(crosswins){
         infoDisplay.textContent = "cross wins!"
         allsquares.forEach(square => square.replaceWith(square.cloneNode(true)))
         return
        }
     })
 }