function linearSearch(arr, searchItem) {
    let result;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === searchItem) {
            result = `${arr[i]} at position ${i}`;
        }
    }

    return result;
}

// linear search with Arrow function
const linearSearch = (arr, searchItem) => {
    let result;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === searchItem) {
            result = `${arr[i]} at position ${i}`;
        }
    }

    return result;
};
console.log(search([10, 45, 25, 21, 12], 21)); // 21  at position 3
console.log(search([10, 45, 25, 21, 12], 12)); // 12  at position 4
console.log(search([10, 45, 25, 21, 12], 45)); //  45 at position 1