var rect={
    perimeter:(a,b) => (2*(a+b)),
    area:(a,b) =>(a*b)
}
function solveRect(l,b){
    console.log("solving for rect with l " +l+" and for b="+b)
    if(l<=0 || b<=0){
        console.log("rectangle dimentions should be greater then zero")
    }
    else{
        console.log(" the area of rectangle is "+rect.area(l,b))
        console.log("the area of rectangle is"+rect.perimeter(l,b))
    }
}
solveRect(-3,4)
solveRect(23,5)
solveRect(4,5)