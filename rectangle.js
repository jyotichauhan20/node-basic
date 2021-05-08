module.exports=(a,b,callback)=>{
    if (a<=0 || b<=0){
        setTimeout(function(){
            callback(new Error("you are not able to make rectangle"),null)
        },2000)
    }
    else{
        setTimeout(function(){
            callback(null,{"perimeter":() => (2*(a+b)),
            "area":() =>(a*b)})

        },1000)
    }

}

// exports.perimeter=(a,b) => (2*(a+b))
// exports.area=(a,b) =>(a*b)