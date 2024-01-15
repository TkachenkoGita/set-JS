'use strict'

function printNumbers(from, to, interval){
    const timerId= setInterval(function(){
        console.log(from);
        if(from===to){
            clearInterval(timerId);
        }
        from+=1
    }, interval);
}
printNumbers(3, 6, 2000);


function printNumbers(from, to, interval){
    setTimeout(function next(){
        console.log(from);
        if(from !==to){
            setTimeout(next, interval);
            from++;
        }
    }, interval);
}
printNumbers(3, 6, 2000);2. 
