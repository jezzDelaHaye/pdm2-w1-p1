//x == true
let xo = true;


function setup()
{
    createCanvas(400,400)
    background(255)
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

function createGrid()
{

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

    let points = []
    if (xo === true)
    {
        drawX(mouseX,mouseY)
        xo = false;
    }
    
    else
    {
        drawO(mouseX,mouseY)
        xo = true;
    }
    
}