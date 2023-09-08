function x() {
    console.log("Hello x function")//1
}
function y(x) {
    console.log("Hello before x is called")//2
    x();
    console.log("Hello after x is called ")//2
}
y(x)
/**
 * output-
 * Hello x function
 * Hello before x is called
 * Hello after x is called
 */



function x() {
    setTimeout(() => {
        console.log("Set time Method Executes ")
    }, 1000)
    console.log("Helllo x function")

    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error("Whoops!")), 1000);
    })
    console.log("Promise is called ")
}
function y(x) {
    console.log("Hello before x is called")
    x();
    console.log("Hello after x is called ")
}
y(x)

// Create a new Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate some asynchronous task
    setTimeout(() => {
        // Resolve the Promise with a value
        resolve("Promise resolved successfully!");
    }, 2000); // Resolve after 2 seconds
});

// Handle the resolved Promise
myPromise.then((result) => {
    console.log(result); // Output: Promise resolved successfully!
}).catch((error) => {
    console.error(error);
});


/**code -2 */
console.log("Start");

setTimeout(() => {
    console.log("Callback 1");
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask 1");
});

Promise.resolve().then(() => {
    console.log("Microtask 2");
});

setTimeout(() => {
    console.log("Callback 2");
}, 0);

console.log("End");
