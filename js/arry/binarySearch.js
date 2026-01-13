let arr = [10, 20, 30, 40, 50, 60]

function binarySearch(CurEle, target) {
    let s = 0, e = arr.length - 1
    while (s <= e) {
        let mid = Math.floor((s + e) / 2)
        if (CurEle[mid] == target) return mid
        else if (CurEle[mid] > target) e = mid - 1
        else s = mid + 1
    }
    return -1
}
if (binarySearch(arr, 40) === -1) console.log("not found")
else console.log("element found")   