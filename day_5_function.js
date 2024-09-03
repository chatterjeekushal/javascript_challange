
// 1> basic function declaration

function hello(){

    console.log("hello");
    
}

hello()


// function expressions

const greet=function(){

    console.log("hello greeet");
    
}

greet()


//3> arrow function

const arrowfun=()=>{

    console.log("hello arrow");
    
}


// 4> defult paramiter

function data(name="kushal"){

    console.log(`hello ${name}`);
    
}


data("rana")



// 5> rest parameters


function sum(...numbers){

    return numbers.reduce((total,number)=>total+number,0)
}

console.log(sum(1,2,3));


// 
