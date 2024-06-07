const arr = [11,8,10,15,2];

const largest = (array = []) => {
    const length = array.length;
    if( length === 0) return null;
    let greatest = array[length - 1];

    for(let i = 1 ; i < length; i++) {
        if(greatest < array[i]) {
            greatest = array[i];
        }
    }
    return greatest;
}
console.log(largest(arr))
