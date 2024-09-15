

// 1. Basic Promise Creation

// Problem: Create a Promise that resolves with the string "Hello, World!" after 2 seconds.

// Hint: Use setTimeout inside the Promise executor function.


const hello_world_promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve("hello world")

    }, 2000);
})


hello_world_promise.then(value => console.log(value))




// 2. Promise Rejection

// Problem: Create a Promise that rejects with an error message "Something went wrong!" after 3 seconds.

// Hint: Use setTimeout and reject in the executor function.


const rejact_promise=new Promise((resolve, reject) => {
    
    setTimeout(() => {
        
        reject("something wrong")
    }, 3000);
})

rejact_promise.catch((value)=>console.log(value)
)



// 3. Chaining Promises

// Problem: Create a Promise that resolves with the number 10. Chain it to another Promise that multiplies the number by 2 and then add 5.

// Hint: Use .then to chain Promises.


const numberPromise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        resolve(10)
    }, 2000);
})

numberPromise
.then((value)=>value*2)
.then((value)=>value+5)
.then((value)=>console.log(value)
)




// 4. Promise.all

// Problem: Create three Promises that resolve after different time intervals (1s, 2s, and 3s) and use Promise.all to log the results when all of them have resolved.

// Hint: Use Promise.all to wait for multiple Promises to resolve.


const promise_1=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("one")
    }, 1000);
})


const promise_2=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("two")
    }, 2000);
})


const promise_3=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("three")
    }, 3000);
})

Promise.all([promise_1,promise_2,promise_3]).then(result=>console.log(result)
)



// 6. Async/Await Syntax

// Problem: Write an async function that awaits a Promise which resolves with "Async/Await Example" after 1 second. Log the result.

// Hint: Use the async keyword and await inside the function.


const asyncExample = () => new Promise(resolve => setTimeout(() => resolve('Async/Await Example'), 1000));

const logAsyncExample = async () => {
  const message = await asyncExample();
  console.log(message);
};

logAsyncExample();



// 7. Error Handling with Async/Await

// Problem: Write an async function that awaits a Promise which rejects with an error message "Failed!" after 1 second. Handle the error using a try/catch block.

// Hint: Use try and catch for error handling in async functions.


const failingPromise = () => new Promise((_, reject) => setTimeout(() => reject('Failed!'), 1000));

const handleError = async () => {
  try {
    await failingPromise();
  } catch (error) {
    console.log("my error");
  }
};

handleError();


// 8. Sequential Execution with Async/Await

// Problem: Create two async functions where the first function returns a Promise that resolves with a number after 2 seconds, and the second function takes that number, doubles it, and returns the result. Execute these functions sequentially using async/await.

// Hint: Call the functions one after the other inside another async function.


const getNumber = async () => new Promise(resolve => setTimeout(() => resolve(5), 2000));
const doubleNumber = async (num) => num * 2;

const processNumbers = async () => {
  const number = await getNumber();
  const doubled = await doubleNumber(number);
  console.log(doubled); // Should log 10
};

processNumbers();
