Perform sorting of an array in descending order


function descendingSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
const arrayToSort = [5, 2, 9, 1, 5, 6];
descendingSort(arrayToSort);

console.log("Sorted Array in Descending Order: " + arrayToSort.join(', '));
