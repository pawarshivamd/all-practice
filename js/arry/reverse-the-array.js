let arr = [1, 2, 3, 4, 5]
let i = 0, j = arr.length - 1

while (i < j) {
    let team = arr[i]
    console.log(team)
    arr[i] = arr[j]
    arr[j] = team
    i++
    j--
}
console.log(arr)