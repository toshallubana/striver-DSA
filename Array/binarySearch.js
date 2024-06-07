/// Binary Search

const arr = [11, 23, 44, 55, 66, 76, 77, 88, 99];
const element = 123;

const BinarySearch = (array = []) => {
    let mid = Math.floor((array.length / 2))
    let i = 0;
    let j = array.length - 1;
    
    while(i < j) {
        if(element === array[mid]) return mid;
        if(element < array[mid]) {
            j = mid - 1;
        } else {
            i = mid + 1;
        }
        mid = Math.floor(((j + i )/ 2))
    }
    return -1

}
console.log(BinarySearch(arr))

