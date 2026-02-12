//x == true
let xo = true;
let grid = [];

let centers = 
[
  [66.67, 66.67],   [200, 66.67],   [333.33, 66.67],
  [66.67, 200],     [200, 200],     [333.33, 200],
  [66.67, 333.33],  [200, 333.33],  [333.33, 333.33]
];

let boxes = 
[
  [0,   125, 0,   125],
  [125, 275, 0,   125],
  [275, 400, 0,   125],

  [0,   125, 125, 275],
  [125, 275, 125, 275],
  [275, 400, 125, 275],

  [0,   125, 275, 400],
  [125, 275, 275, 400],
  [275, 400, 275, 400]
];


function setup()
{
    createCanvas(400,400)
    background(255)
    createGrid(3,3,grid)
    
}

function draw()
{
    drawGrid()

}

function drawGrid()
{
    line(125,0,125,400)
    line(275,0,275,400)
    line(0,125,400,125)
    line(0,275,400,275)
}

function createGrid(numRows,numCols,arr)
{
    for (let i = 0; i < numRows; i++)
    {
        const row = []
        for (let j = 0; j < numCols; j++)
        {
            row.push("")
        }
        arr.push(row)
    }
    return arr

}

function drawX(x,y)
{
    line(x-25,y-25,x+25,y+25)
    line(x-25,y+25,x+25,y-25)
}

function drawO(x,y)
{
    circle(x,y,100)
}

function mousePressed()
{
   for(let i = 0; i < boxes.length; i++)
   {
        let [xMin, xMax, yMin, yMax] = boxes[i];

        if 
        (
            mouseX >= xMin &&
            mouseX < xMax &&
            mouseY >= yMin &&
            mouseY < yMax
        ) 
        {
            if(xo === true)
            {
                drawX(centers[i][0],centers[i][1])
                xo = false;
                grid[i] = ("x")
                console.log(grid)
            }
            else
            {
                drawO(centers[i][0],centers[i][1])
                xo = true;
                grid[i] = ("o")
                console.log(grid)
            }
            
        }
        
    }
}

