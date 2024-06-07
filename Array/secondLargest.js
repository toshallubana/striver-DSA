// second largest

// const arr = [11, 34, 89, 23, 100, 22];

// const secondLargest = (arr) => {
//     let largest = -1;
//     let secondLargest = -1;
//     for(let i = 0; i < arr.length; i++) {
//         if(i == 0) {
//             largest = arr[i];
//             secondLargest = arr[i];
//         }
//         if(arr[i] > largest) {
//             const swap = largest;
//             largest = arr[i];
//             secondLargest = swap
//         }
//     }
//     if(largest === secondLargest) return -1
//     return secondLargest;
// }
// console.log(secondLargest(arr));


const arr = [2,10,3,5];
// const arr = [11, 34, 89, 23, 100, 22]; 
// const arr = [4, 4, 4];
const secondLargest = (arr) => {
    let largest = -1;
    let secondLargest = -1;
    for(let i = 0; i < arr.length; i++) {
        // if(i == 0) {
        //     largest = arr[i];
        //     secondLargest = arr[i];
        // }
        if(arr[i] > largest) {
            const swap = largest;
            largest = arr[i];
            secondLargest = swap
        } else {
            if(secondLargest < arr[i]) {
                secondLargest = arr[i]
            }
        }
    }
    if(largest === secondLargest) return -1
    return secondLargest;
}
console.log(secondLargest(arr));