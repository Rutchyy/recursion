// Merge sort
function mergeArrays(left, right) {
    let result = []
    let rightInd = 0, leftInd = 0

    while (leftInd < left.length && rightInd < right.length) {
        if (left[leftInd] < right[rightInd]) {
            result.push(left[leftInd])
            leftInd++
        } else {
            result.push(right[rightInd])
            rightInd++
        }
    }

    let newElements;

    if (left[leftInd]) {
        newElements = left.slice(leftInd)
    } else {
        newElements = right.slice(rightInd)
    }

    result.push(...newElements)


    return result
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr

    const left = arr.slice(0, arr.length / 2)
    const right = arr.slice(arr.length / 2)

    return mergeArrays(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))



// Fibonnaci sequence
function fibs(num) {
    const allNums = [0, 1]
    for (let i = 2; i <= num; i++) {
        allNums.push(allNums[allNums.length - 1] + allNums[allNums.length - 2])
    }

    return allNums[allNums.length - 2]
}

function fibsRec(num) {
    return num < 2 ? num : fibsRec(num - 1) + fibsRec(num - 2)
}

console.log(fibsRec(10))