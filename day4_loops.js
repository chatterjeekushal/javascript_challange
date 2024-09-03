

// task1: wright a program to print number from 1 to 10

for (let i = 1; i <=10; i++) {
    
    console.log(i);
}

// task2: wright a program to print the multiplication table of 5 using a fo loop

for (let i = 0; i <=10; i++) {
    

    console.log(`2 x ${i} = ${2*i}`);
    
}



// task3 : wright a program to calvulate the sum of numbers from 1 to 10


let i=1

let res=0

 while (i<=10){

    res+=i
    i++;
 }


 console.log(res);




 // task 4: wright aprogram to print numbers 10 to 1 using while loop

 let k=1

 while(k<=10){

    console.log(k);

    k++
 }



 // task 5: print satar using  * for loop

 let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    console.log(str.repeat(i));
}



// task6 : wright a program to print i to to but 5 is aboyt using continew 
let m=1

while (m <= 10) {
    if (m === 5) {
        m++;
        continue;
    }

    console.log(m);
    m++;
}

