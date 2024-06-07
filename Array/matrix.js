const arr = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
];

let col0 = 1;

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        if(arr[i][j] == 0) {
            arr[i][0] = 0;
            if(j != 0) {
                arr[0][j] = 0
            } else {
                col0 = 0
            }
        }
    }
}

for(let i = 1; i < 3; i++) {
    for(let j = 1; j < 3; j++) {
        if(arr[i][j] != 0) {
            if(arr[0][j] == 0 || arr[i][0] == 0) {
                arr[i][j] = 0
            }
        }
    }
}

if(arr[0][0] == 0) {
    for(let j = 0; j < 3; j++) arr[0][j] = 0;
}

if(col0 == 0) {
    for(let i = 0; i < 3; i++) {
        arr[i][0] = 0;
    }
}

console.log(arr);

// n2
// space O(2)
// let row = [0,0,0];
// let col = [0,0,0];

// for(let i = 0; i < 3; i++) {
//     for(let j = 0; j < 3; j++) {
//         if(arr[i][j] == 0) {
//             row[i] = 1;
//             col[j] = 1
//         }
//     }
// }

// console.log(arr)

// for(let i = 0; i < 3; i++) {
//     for(let j = 0; j < 3; j++) {
//         if(row[i] || col[j]) {
//             arr[i][j] = 0;
//         }
//     }
// }
// console.log(arr);


// const markRow = (i) => {
//     for(j = 0; j < 3; j++) {
//         if(arr[i][j] != 0) {
//             arr[i][j] = -1;
//         }
//     }
// }

// const markCol = (j) => {
//     for(j = 0; j < 3; j++) {
//         if(arr[i][j] != 0) {
//             arr[i][j] = -1;
//         }
//     }
// }

// for(let i = 0; i < 3; i++) {
//     for(j = 0; j < 3; j++) {
//         if(arr[i][j] == 0) {
//             markRow(i)
//             markCol(j)
//         }
//     }
// }

