
// Fibonacci Sequence 
function getNthFibo(n) {
    if (n <= 1) {
        return n;
    } else {
        return getNthFibo(n - 1) + getNthFibo(n - 2);
    }
}

// Time Complexity O(n)
// Space Completxity O(n)
function getNthFiboBetter(n, lastlast, last) {
    if (n == 0) {
        return lastlast;
    }
    if (n == 1) {
        return last;
    }
    return getNthFiboBetter(n-1, last, lastlast + last);
}

// Pascal's Triangle
function pascalTriangle(row, col) {
    if (col == 0) {
        return 1;
    } else if (row == 0) {
        return 0;
    } else {
        return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
    }
}

// Decimat to Binary
//Time Complexity: O(log2(n))
function base10ToString(n) {
    var binaryString = "";

    function base10ToStringHelper(n) {
        if (n < 2) {
            binaryString += n;
            return;
        } else {
            base10ToStringHelper(Math.floor(n / 2));
            base10ToStringHelper(n % 2);
        }
    }
    base10ToStringHelper(n);

    return binaryString;
}
  

// All permutations of an array
// Time Complexity O(n!)
// Space Completxity O(n!)
function swap(strArr, index1, index2) {
    var temp = strArr[index1];
    strArr[index1] = strArr[index2];
    strArr[index2] = temp;
}
function permute(strArr, begin, end) {
    if (begin == end) {
        console.log(strArr);
    } else {
        for (var i = begin; i < end + 1; i++) {
            swap(strArr, begin, i);
            permute(strArr, begin + 1, end);
            swap(strArr, begin, i);
        }
    }
}

function permuteArray(strArr) {
    permute(strArr, 0, strArr.length - 1);
}

// Is palindrome
// Time Complexity O(n)
// Space Completxity O(n)
function isPalindromeRecursive(word) {
    return isPalindromeHelper(word, 0, word.length-1);
}

function isPalindromeHelper(word, beginPos, endPos) {
    if (beginPos >= endPos) {
        return true;
    }
    if (word.charAt(beginPos) != word.charAt(endPos)) {
        return false;
    } else {
        return isPalindromeHelper(word, beginPos + 1, endPos - 1);
    }
}