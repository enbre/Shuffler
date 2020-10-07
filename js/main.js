console.log('insanity check')
// Project One- Shuffle Puzzle:
// A scrambled picture broken up into "pixels", is loaded on the main screen with one 'pixel' missing. User rearranges 'pixels', or image cells, one at a time by sliding cells into the open cell. Number of moves is tracked and logged on screen. One player game.


// Image cells:
// Create three classes: 
//  cellImage- general image cells
//  cellAdj- image cells adjacent to empty cell, thus allowed to move  
//  cellEmpty- single empty cell that is the only possible location where images can be dropped

// after meeting w/ Michael:
// click on image, rather than drag. use a 2d array (essentially an array of ) 

// initial thoughts:
// Probably going to use some sort combination of ondrag and ondrop to move images from adjacent cells to the empty cell, and then event listener to change the class of the two affected cells.
// Not sure how to limit the dragability to only those cells that are adjacent to the empty cell. A distance limiter? Since every cell is a square of the same size, if the cellAdj could be limited to a distance slightly larger than the h or w of the empty cell, that would work. Don't know if that is an option.


// how to identify which cells are adjacent to empty cell?
// empty cell is identified by class & id applied upon creation, but not sure how to figure that out when images are randomly arranged
// ^^querySelector to find ID

// copying the syntax structure from high card game & poke-a-square:


// const createCells =(numberOfSquares) => {
//     // create cells container
//     const cellContainer = document.createElement('div');
//     container.setAttribute('class', 'container');
//     document.body.appendChild(container)
//     // create cells
//     for (let i=0; i<9;i++){
//         let cell = document.createElement('img');
//         cell.setAttribute('class', 'cell-Empty');
//         cell.setAttribute('src', `./images/empty.png`);
//         container.appendChild(cell);
//     }
// }

// grid positions of the cells 

// let cellGrid = [[0,1,2], [3,4,5], [6,7,8]];
// // how to loop through cellGrid to look for 
// for (let i =0; i<cellGrid.length;i++){
//     let innerArrLen = cellGrid[i].length;
//     for (let j=0; j<innerArrLen; j++){
//         // console.log(`${i} , ${j}`)
//         if (document.querySelector('.cell-Empty')){
//             console.log(`i, j`)
//             // return cellGrid [i][j]
//         }
//     }
// }


let container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.appendChild(container)

// /*
let game = {
// number of player moves:
    moves: 0,
// 2D array representing the game board locations:
// this is used to cycle through to keep track of empty cell location:
    cellGrid: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
// game array:
    cellArr: [],
    
    // creates divs containers for images:
    //apply images with innerHTML- though this doesn't seem to be working
    createCellDivs: function () {
        // create cells
        for (let i = 0; i < 9; i++) {
            let cell = document.createElement('div');
            // cell.createElement('img',);
            let cellImg =document.createElement('img')

            cellImg.setAttribute('src', `./images/empty.png`);
            cellImg.setAttribute('class', 'cell-Img');
            // cell.setAttribute('classList', 'cell-Img');
            // cell.setAttribute('classList', 'cell-Adj');
            cell.setAttribute('classList', 'cell-Empty');
            // cell.setAttribute('src', `./images/empty.png`);
            cell.setAttribute('id', `cellDiv${i}`)
            cellImg.setAttribute('id', `cell${i}`)
            container.appendChild(cell);
            cell.appendChild(cellImg);

        }
    },

    // populates cells array with object with image source, value, and id (is ID useful for the image?):
    getCells: function () {
        // this.createCells()
        for (let i = 1; i < 9; i++) {
            this.cellArr.push({ src: `./images/image${i}.png`, value: i, id: `img${i}` })
        }
        this.cellArr.push({ src: `./images/empty.png`, value: 0, id: `img0` })
        // console.log(this.cells)
    },

// shuffles cells array so they are in random order:
    shuffleCells: function () {
        // this.getCells()
        for (let i = (this.cellArr.length - 1); i > 0; i--) {
            x = (Math.floor(Math.random() * (i)))
            temp = this.cellArr[i]
            this.cellArr[i] = this.cellArr[x]
            this.cellArr[x] = temp
        }
        // console.log(this.cells)
        // console.log('--------------------------------------------------------------------------------------------------'),
    },

// distributes shuffled cells to grid of cell containers at the start of the game:
    dealCells: function () {
        // this.shuffleCells()
        // let newCell = this.cells.pop();
        // linear array to apply image objects to div cell containers:
        for (let k=0; k<this.cellArr.length;k++){
            let newCell = this.cellArr[k];
            // console.log(newCell)
            // console.log(newCell.src)
            // document.getElementById(`cell${k}`).setAttribute('src',`./images/image${k}.png`)
            document.getElementById(`cell${k}`).setAttribute('src', newCell.src)
            document.getElementById(`cell${k}`).setAttribute('value', newCell.value)
            document.getElementById(`cell${k}`).setAttribute('id', newCell.id)
            // document.getElementById(`cell${k}`).innerHTML.src=(newCell.src)
            // document.getElementById(`cell${k}`).innerHTML.src=newCell.src
            // document.getElementById(`cell${k}`).appendChild(newCell.src)
        }
            
            
    },
    // Again for reference:
    // cellGrid: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],

    // apply X and Y grid coordinates to image object: 
    // This needs to be rerun after every move
    gridLocations: function (){
        let dupCellArr  = this.cellArr.slice()
        console.log(this.cellArr)
        // console.log(dupCellArr)
        for (let i = 0; i < this.cellGrid.length; i++) {
            let innerArrLen = this.cellGrid[i].length;
            for (let j = 0; j < innerArrLen; j++) {
                let newCell = dupCellArr.shift();
                newCell.xposition = i;
                newCell.yposition = j;
                // console.log(newCell)
            }
        }
    },
                

    // console.log('--------------------------------------------------------------------------------------------------'),

    // loop through cellGrid to find and return X coordinate:
    findEmptyX: function () {
        for (let i=0; i<this.cellArr.length;i++){
           let tempCell=document.getElementById(`img${i}`)
        //    console.log(typeof(tempCell))
        //    console.log(tempCell)

        //    let tempCell=document.getElementById(`img${i}`)
        //    console.log(typeof(tempCell))
        //    console.log(tempCell)
        //    console.log(tempCell.value)
            // if (tempCell.value ==0){
            // console.log(tempCell.xposition)
            //     return tempCell.xposition
            // }
        }
    },

    // loop through cellGrid to find and return Y coordinate:
    // findEmptyY: function () {
    //     for (let i=0; i<this.cellArr.length;i++){
    //        let tempCell=document.getElementById(`img${i}`)
    //         if (tempCell.value ==0){
    //         console.log(tempCell.yposition)
    //             return tempCell.yposition
    //         }
    //     }
    // }

    // labelAdjacent: function(emptyRow,emptyCol){

    //     this.cellGrid[emptyRow+1][emptyCol+1] 
    //     this.cellGrid[emptyRow-1][emptyCol+1] 
    //     this.cellGrid[emptyRow+1][emptyCol-1] 
    //     this.cellGrid[emptyRow-1][emptyCol-1] 

    // }


    // document.querySelector('.cell-Empty').addEventListener('click', isEmpty)
    // function isEmpty(e) {
    //     console.log('this cell is empty')
    // }

}
//  ^^^^^^^ END OF GAME OBJECT- should be yellow

// function to switch between multiple classes:
// const cellClassSwitch = function (input, cellImg, cellAdj, cellEmpty){
//     input.classList.toggle(cellImg)
//     input.classList.toggle(cellAdj)
//     input.classList.toggle(cellEmpty)
// }

// let cellGrid = [[0,1,2], [3,4,5], [6,7,8]]

game.createCellDivs()
game.getCells()
console.table(game.cellGrid)
game.shuffleCells()
// console.log(game.cells)
game.dealCells()
game.gridLocations()
game.findEmptyX()
// game.findEmpty()


// add event listeners to determine if cells are movable
// document.querySelectorAll('.cell-Img').forEach(e => {
//     e.addEventListener('click', isNotMovable)
//     function isNotMovable(e) {
//         console.log('this cell is not movable')
//     }
// })


// document.querySelectorAll('.cell-Adj').forEach(e =>{
//     e.addEventListener('click', isMovable)
//     function isMovable(j){
//         console.log('this cell is movable')
//     }
// }),

// document.querySelector('.cell-Empty').addEventListener('click', isEmpty)
// function isEmpty(e) {
//     console.log('this cell is empty')
// }


// Yesterday I got the initial game set up with 3x3 grid, labeled with their values, and have them distributing randomly (mostly). Built a 2D array that replicates game board. 

// Things that are blocking me: locating the grid coordinates for empty cell, saving them as variables, and then locating the grid coordinates of adjacent cells.





// locate where the empty cell is on the grid
    // by looping through a 2D array looking for the 'cell-Empty' class
// locate which cells are adjacent to empty cell (above, right, left, bottom)
    // based on 2D array empty cell location, each cell +/- 1 in X and Y axis
// change the class of those adjacent cells to '.cell-Adj' 
// apply 'click' listener event to adjacent cells to allow them to be clicked
// for each move, increase the total number of moves made on the 'moves' tracker
// once a clickable cell is clicked, swap images, value, and class with empty cell
// once all cell's values are in order through the grid, the puzzle is solved



// // Create Score Container
// let scoreContainer = document.createElement('div');
// scoreContainer.setAttribute('class', 'scoreContainer')
// document.body.appendChild(scoreContainer);
// // Create Player Score
// let playerScore = document.createElement('div');
// playerScore.setAttribute('class', 'playerScore');
// playerScore.innerHTML = "Player: 0";
// scoreContainer.appendChild(playerScore);
// // Create Computer score
// let cpuScore = document.createElement('div');
// cpuScore.setAttribute('class', 'cpuScore');
// cpuScore.innerHTML = "CPU: 0";
// scoreContainer.appendChild(cpuScore);
// // Create Deal Button
// let dealButton = document.createElement('button');
// dealButton.setAttribute("class", "dealButton");
// document.body.appendChild(dealButton);



















    // James Sinkler  1:39 PM
    // Coding Challenge: FizzBuzz
    // 1-100, inclusive
    // ===============================
    // Find a javascript file, and try and write some code to do the following.
    // If the number is divisible by 3, write “Fizz”
    // If the number is divisible by 5, write “Buzz”
    // If the number is divisible by both 3 and 5, write “FizzBuzz”
    // Otherwise, write the number



// const fizzBuzz=()=>{
//     for (let i=1;i<101;i++){
//         if (i%3===0 && i%5===0){
//             console.log(`${i}, FizzBuzz`)            
//         }else if (i%3==0){
//             console.log(`${i}, Fizz`)
//         }else if (i%5===0){
//             console.log(`${i}, Buzz`)        
//         } console.log(i)
//     }    

// }    

// fizzBuzz()

