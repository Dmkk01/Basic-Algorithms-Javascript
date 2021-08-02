// Problem: Given the array arr, find and return two indices of the array that add up to weight or return -1 if there is no combination that adds up to weight.


// Time Complexity O(n^2)
// Space Completxity O(1)
function findSum(arr, weight) {
    for (var i=0,arrLength=arr.length; i<arrLength; i++){
        for (var j=i+1; j<arrLength; j++) {
            if (arr[i]+arr[j]==weight){
                return [i,j];
            }
        }
    }
    return -1;
}

// Time Complexity O(n)
// Space Completxity O(n)
function findSumBetter(arr, weight) {
    var hashtable = {};

    for (var i=0, arrLength=arr.length; i<arrLength; i++) {
        var currentElement = arr[i],
            difference = weight - currentElement;

        if (hashtable[currentElement] != undefined) {
            return [i, hashtable[weight-currentElement]];
        } else {
            hashtable[difference] = i;
        }
    }
    return -1;
}