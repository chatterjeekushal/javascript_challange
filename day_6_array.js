
// 1> reverse an array

let my_arr=[1,2,3,4,5]


//ans1>

function array_revarce(arr){

    return arr.reverse()
}

console.log(array_revarce(my_arr));


// ans2


for (let i = my_arr.length; i <=1; i--) {
    
    console.log(my_arr[i]);
    
}




// 2> sum of all Element


let my_arr2=[4,4,2,3]


// ans1

function sum_arr(jok){

    return jok.reduce((acc,num)=>acc+num,0)

}

console.log(sum_arr(my_arr2));



// ans2

let mum_sum=0

my_arr2.forEach(element => {
    
    mum_sum+=element

});

console.log(mum_sum);




//3> find the maximum element


let my_arr3=[44,67,90,120]

function find_max(arr){

return Math.max(...arr)

}

console.log(find_max(my_arr3));



//4> flatten a nested array

let nest_array=[1,[2,[3,4],5],6]

function flatten_array(arr){

    return arr.flat(Infinity)

}

console.log(flatten_array(nest_array));




//5> chack if an array is a subset of anathor array 

let subset1=[1,2] 
let subset2=[1,2,3,4]

function is_subset(arr1,arr2){

    return arr1.every(value=>arr2.includes(value))

}

console.log(is_subset(subset1,subset2));


// mathod 2

let subset_status=false

subset1.forEach(element1 => {
    
    
       if (subset2.includes(element1)) {
        
        subset_status=true
        
       }
       else{
        subset_status=false
       }

});

console.log(subset_status);



// find the missing number


function findMissingNumber(arr) {
    const n = arr.length + 1;
    const sumOfFirstN = (n * (n + 1)) / 2;

    let sumOfArray = 0;
    for (let i = 0; i < n - 1; i++) {
        sumOfArray = sumOfArray + arr[i];
    }

    let missingNumber = sumOfFirstN - sumOfArray;

    return missingNumber;
}

const arr = [1, 2, 5, 4, 6, 8, 7];
const missingNumber = findMissingNumber(arr);
console.log("Missing Number: ", missingNumber)



// remove duplicate from an array

let duplicate_array=[1,2,2,3,4,4,5]

function remove_duplicate(arr) {
    
    return [...new Set(arr)];
}

// console.log(remove_duplicate(duplicate_array));

// 2nd mathod

let clear_array=[]

duplicate_array.forEach(element => {
    
    if(clear_array.includes(element)){

        console.log(element);
        
    }
    else{
        clear_array.push(element)
    }
    
});

console.log(clear_array);



// marge two sorted array

let sot_array1=[1,3,5];
let sot_array2=[2,4,6]

function soted_arry() {
    
    
    let final_array=sot_array1.concat(sot_array2)
    
    console.log(final_array,"final");
    

    let final_sorted_array=final_array.sort()

    console.log(final_sorted_array,"final_sorted");
    
}

soted_arry()
