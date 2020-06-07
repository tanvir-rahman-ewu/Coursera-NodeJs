let rect = require('./rectangle')

function solveRect(l, b)
{
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if( l <= 0 || b <= 0)
    {
        console.log("Invalid input")
    }
    else{
        console.log("Area : " + rect.area(l, b))

        console.log("Perimeter : " + rect.perimeter(l, b));
    }
}

solveRect(10, 10)