// binary search is a quick search algorithm  O(nlogn) but the array is in sorted order
function binarySearch(arr, searchElement) {
    arr = arr.sort();
    let low = 0;
    let high = arr.length - 1;
    let mid = parseInt((low + high) / 2); // if we have 6 elements then it gives decimal digit so parseInt give integer value
    while (arr[mid] !== searchElement) {
        if (searchElement > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
        mid = parseInt((low + high) / 2);
    }
    console.log(low, mid, high);
    return `${arr[mid]} => ${mid}`;
}
console.log(binarySearch([1, 3, 5, 7, 9], 3));