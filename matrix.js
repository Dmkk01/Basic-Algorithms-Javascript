// Helper function to create a jagged array

function Matrix(rows, columns) {
    var jaggedarray = new Array(rows);
    for (var i=0; i < columns; i +=1) {
        jaggedarray[i]=new Array(rows);
    }
    return jaggedarray;
}

// Problem: Given a matrix, print the elements in a spiral order

var M = [[1, 2, 3, 4, 5],
         [6, 7, 8, 9, 10],
         [11, 12, 13, 14, 15],
         [16, 17, 18, 19, 20]];

// Time Complexity O(mn)
// Space Completxity O(1)
function spiralPrint(M) {
    var topRow = 0,
        leftCol = 0,
        btmRow = M.length - 1,
        rightCol = M[0].length - 1;

    while (topRow < btmRow && leftCol < rightCol) {
        for (var col = 0; col <= rightCol; col++) {
            console.log(M[topRow][col]);
        }
        topRow++;
        for (var row = topRow; row <= btmRow; row++) {
            console.log(M[row][rightCol]);
        }
        rightCol--;
        if (topRow <= btmRow) {
            for (var col = rightCol; col >= 0; col--) {
                console.log(M[btmRow][col]);
            }
            btmRow--;
        }
    if (leftCol <= rightCol) {
            for (var row = btmRow; row > topRow; row--) {
                console.log(M[row][leftCol]);
            }
            leftCol++;
        }
    }
}


// Problem: Rotate a matrix to the left by 90 degrees .

var matrix = [[1,0,1],[0,0,1],[1,1,1]];

// Time Complexity O(mn)
// Space Completxity O(1)
function rotateMatrix90Left (mat){
    var N = mat.length;

    for (var x = 0; x < N / 2; x++) {
        for (var y = x; y < N-x-1; y++) {
            var temp = mat[x][y];
            mat[x][y] = mat[y][N-1-x];
            mat[y][N-1-x] = mat[N-1-x][N-1-y];
            mat[N-1-x][N-1-y] = mat[N-1-y][x];
            mat[N-1-y][x] = temp;
        }
    }
}