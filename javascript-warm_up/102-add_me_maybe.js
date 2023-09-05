extports.me_maybe = function (number, theFunction){
    for (let i = 0; i < number; i++){
        theFunction();
    }
    number++;
}