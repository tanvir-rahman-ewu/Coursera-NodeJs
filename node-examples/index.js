let rect = require('./rectangle')

function solveRect(l, b)
{
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rect(l, b, (err, rectangle) => {
        if(err)
        {
            console.log("Error: ", err.message)
        }
        else{
            console.log("Area: " + rectangle.area())
        }
    })
    console.log("this statement is after call to rect()")
}

solveRect(10, 10)