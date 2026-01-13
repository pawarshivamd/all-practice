
const array = [10, 20, 50, 400, 80]

let max = array[0]
for (let index = 0; index < array.length; index++) {
    array[index] > max ? max = array[index] : null

}
console.log(max)

const arr = [22, 33, 55, 88, 32, 90, 100, 100]
let maxN = Math.max(arr[0], arr[1])
let smaxN = Math.min(arr[0], arr[1])

for (let i = 2; i < arr.length; i++) {
    if (arr[i] > maxN) {
        smaxN = maxN
        maxN = arr[i]

    } else if (arr[i] > smaxN && arr[i] != maxN) {
        smaxN = arr[i]
    }
}
console.log("second large number " + smaxN)

