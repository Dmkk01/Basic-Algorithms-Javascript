function intersectSets (setA, setB) {
    var intersection = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]);
intersectSets(setA,setB); // Set {2, 3}




function isSuperset(setA, subset) {
    for (var elem of subset) {
        if (!setA.has(elem)) {
            return false;
        }
    }
    return true;
}
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]),
    setC = new Set([5]);
isSuperset(setA, setB); // true   because setA has all elements that setB does
isSuperset(setA, setC); // false  because setA does not contain 5 which setC contains




function unionSet(setA, setB) {
    var union = new Set(setA);
    for (var elem of setB) {
        union.add(elem);
    }
    return union;
}
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]),
    setC = new Set([5]);
unionSet(setA,setB); // Set {1, 2, 3, 4}
unionSet(setA,setC); // Set {1, 2, 3, 4, 5}


function differenceSet(setA, setB) {
    var difference = new Set(setA);
    for (var elem of setB) {
        difference.delete(elem);
    }
    return difference;
}
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]);
differenceSet(setA, setB); // Set {1, 4}



// Time Complexity O(n)
// Space Completxity O(n)
function checkDuplicates(arr) {
    var mySet = new Set(arr);
    return mySet.size < arr.length;
}
checkDuplicates([1,2,3,4,5]); // false
checkDuplicates([1,1,2,3,4,5]); // true



// Time Complexity O(n+m)
// Space Completxity O(n+m)
function uniqueList(arr1, arr2) {
    var mySet = new Set(arr1.concat(arr2));
    return Array.from(mySet);
}

uniqueList([1,1,2,2],[2,3,4,5]); // [1,2,3,4,5]
uniqueList([1,2],[3,4,5]); // [1,2,3,4,5]
uniqueList([],[2,2,3,4,5]); // [2,3,4,5]