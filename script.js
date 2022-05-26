// 1. Always Hungry
function alwaysHungry(arr) {
    var found = 0;
    for (var i = 0; i <arr.length; i++){
        if (arr[i] == "food"){
            found++;
            console.log("yummy");
        }
    }
    if (found == 0){
        console.log("I'm hungry");
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

//2.High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var x = 0; x < arr.length ; x++){
        if (arr[x] > cutoff){
            filteredArr.push(arr[x]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//3.Better than average
function betterThanAverage(arr) {
    var sum = 0;
    var count = 0
    for (var i = 0 ; i < arr.length ; i++){
        sum += arr[i];
    }
    sum = sum / arr.length;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > sum){
            count++;
        }
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


//4.Array Reverse
function reverse(arr) {
    for(var i = arr.length-1 ; i > 0 ; i--){
        arr.splice(i, 0, arr.shift());
    }
return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// 5.Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (let i = 0 ; i < n-2 ; i++){
        fibArr.push(fibArr[i]+fibArr[i+1]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
