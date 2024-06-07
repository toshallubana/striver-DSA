// const arr = [1,0,1,1,2,0]
const arr = [1,2,0]

// const sortZeroOne = (arr) => {
//     const arr1 = [];
//     const arr2 = [];
//     const arr3 = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === 0) {
//             arr1.push(arr[i])
//         } else if(arr[i] === 1) {
//             arr2.push(arr[i])
//         } else if(arr[i] === 2) {
//             arr3.push(arr[i]);
//         }
//     }
//     return [...arr1, ...arr2, ...arr3]
// }
// console.log(sortZeroOne(arr));


const sortArray = (arr) => {
    let low = 0, mid = 0, high = arr.length - 1;

    while(mid <= high) {
        if(arr[mid] == 0) {
            [arr[low], arr[mid]] = [arr[mid],arr[low]];
            low++;
            mid++;
        } else if(arr[mid] == 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high],arr[mid]];
            high--;
        }
        console.log(arr,'arr');
    }
    return arr
}
console.log(sortArray(arr));