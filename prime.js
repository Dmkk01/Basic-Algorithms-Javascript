// Time Complexity - O(n)
function isPrime(n) {
    if (n <= 1) return false

    for (var i=2; i<n;i++) {
        if (n%i == 0) return false
    }

    return true
}

// Time Complexity - O(sqrt(n))
function isPrimeBetter(n) {
    if (n <= 1) return false
    if (n <= 3) return true

    if (n%2 == 0 || n%3 == 0) return false;

    for (var i=5; i*i<n;i+6) {
        if (n%i == 0 || n%(i+2) == 0) return false
    }

    return true
}

// Time Complexity - O(sqrt(n))
function primeFactors(n){
    while (n%2 == 0) {
        console.log(2);
        n = n/2;
    }

    for (var i = 3; i*i <= n; i = i+2) {
        while (n%i == 0) {
            console.log(i);
            n = n/i;
        }
    }
    if (n > 2) {
        console.log(n);
    }
}
// Time Complexity - O(n*sqrt(n))
function allPrimesLessThanN(n){
    for (var i=0; i<n; i++) {
            if (isPrime(i)){
                    console.log(i);
            }
    }
}