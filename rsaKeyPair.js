// Encryption process is as shown:
//         m - message:
//         m^e % n = c
//         c - encrypted message
// Decryption process is as shown:
//         c^d % n = m
// This is the implementation of calculating d:
function modInverse(e, phi) {
    var m0 = phi, t, q;
    var x0 = 0, x1 = 1;

    if (phi == 1)
        return 0;

    while (e > 1) {
        // q is quotient
        q = Math.floor(e / phi);
        t = phi;
        // phi is remainder now, process same as
        // Euclid's algo
        phi = e % phi, e = t;
        t = x0;
        x0 = x1 - q * x0;
        x1 = t;
    }
    // Make x1 positive
    if (x1 < 0)
        x1 += m0;

    return x1;
}
modInverse(7,40); // 23


// Key pairs of a public key and a private key also need to be generated.
function RSAKeyPair(p, q) {
    // Need to check that they are primes
    if (! (isPrime(p) && isPrime(q)))
            return;

    // Need to check that they're not the same
    if (p==q)
            return;

    var n = p * q,
            phi = (p-1)*(q-1),
            e = 3,
            d = modInverse(e,phi);

    // Public key: [e,n], Private key: [d,n]
    return [[e,n], [d,n]]
}

function isPrime(n) {
    if (n <= 1) return false
    if (n <= 3) return true

    if (n%2 == 0 || n%3 == 0) return false;

    for (var i=5; i*i<n;i+6) {
        if (n%i == 0 || n%(i+2) == 0) return false
    }

    return true
}


// Let’s pick 5 and 11 as the primes and see an example where message is 50.
//   RSAKeyPair(5,11); //Public key: [3,55], Private key: [27,55]
//    p = 5, 11
//    n = p x q = 55
//    phi = (5-1) x (11-1) = 4 x 10 = 40
//    e = 3
//    (e x d) % phi = 1 (3 x d) % 40 = 1
//    (81) % 40 = 1. 81 = 3 x d = 3 x 27
//    d = 27
//    Encryption:
//            m - message: 50
//            m^e % n = c
//            50^3 % 55 = 40
//    Encrypted message.,c:
//            40
// Decryption:
// c^d % n = m
// 40^27 % 55 = 50