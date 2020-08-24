let mouseX;
let mouseY;
let containerSize = 960;
//let dimensions = 16;
const mousePosition = (event) => {
    mouseX = event.pageX;
    mouseY= event.pageY;
   
}

const setGrid = (dimensions) =>{
    const grid = document.querySelector(".grid");
    let squareSize= 960/dimensions;
    let squares =[];
   for (let i = 0; i <(dimensions * dimensions); i++) {
       squares[i] = document.createElement("div");
       squares[i].classList.add("square");
       squares[i].addEventListener("mouseover",function(){this.setAttribute("style","background-color:black;") })
       grid.appendChild(squares[i]);
   }
   grid.setAttribute("style",
   `grid-template-rows: repeat(${dimensions},${squareSize}px);
    grid-template-columns: repeat(${dimensions},${squareSize}px);
   `)
}

const editGrid = () => {
    const squares =document.querySelectorAll(".square");
    //console.log(squares);
    squares.forEach((square) => { 
       square.setAttribute("style","background-color:white;");
    });
    let dim = prompt("Enter new grid dimensions");
    dim = parseInt(dim);
   
    while(!dim )
    {
       
        dim = prompt("Enter new grid dimensions");
        dim = parseInt(dim);
    }
    const grid = document.querySelector(".grid");
    while (grid.firstChild) {
        grid.firstChild.remove();
    }
    setGrid(dim);
}