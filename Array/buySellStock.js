// const arr = [7,1,5,3,6,4]
// const arr = [2,6,9,1,5]
// const arr = [7,6,4,3,1]
const arr = [1,2,4]

// const buySellStock = (arr) => {
//     let profit = 0;
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             let largest = arr[j] - arr[i];
//             if(profit < largest) {
//                 profit = largest
//             } 
//         }
//     }
//     return profit
// }
// console.log(buySellStock(arr));

// const larger = (maxIdx, minIdx, profit) => {
//     let largest = arr[maxIdx] - arr[minIdx];
//     console.log(largest, 'largest');
//     if(profit < largest) {
//         profit = largest;
//     }
//     return profit;
// }


const buySellStock = (arr) => {
    let profit = 0;
    let i = 0;
    let j = i + 1;
    while(j <= arr.length - 1) {
        let largest = arr[j] - arr[i];
        if(profit < largest) {
            profit = largest;
        }
        j++;
        
        if(j === arr.length - 1) {
            let largest = arr[j] - arr[i];
            if(profit < largest) {
                profit = largest;
            }
            i++;
            j= i + 1
        }
    }
    return profit;
}
console.log(buySellStock(arr));