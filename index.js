   // an expression = function without a name (anonymous function)
   // Benefits- They help us to avoid polluting the global scope with random function names
                      //We can write a function, then forget about it


  /*   sayHello(); 
    function sayHello(){
    console.log("Hello");
} */

/* const greeting = function (){
    console.log("Hello!");
}

greeting(); */

let count = 0;
document.getElementById("increaseButton").onclick = function(){
    count+=1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseButton").onclick = function(){
    count-=1;
    document.getElementById("myLabel").innerHTML = count;
}

 /*function increaseCount(){
    count+=1;
    document.getElementById("myLabel").innerHTML = count;
}

function decreaseCount(){
    count-=1;
    document.getElementById("myLabel").innerHTML = count;
}*/