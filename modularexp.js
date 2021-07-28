
// Time Complexity O(n)
function modularExponentiation ( base, exponent, modulus ) {
    if (modulus == 1) return 0;

    var value = 1;

    for ( var i=0; i<exponent; i++ ){
            value = (value * base) % modulus;
    }
    return value;
}