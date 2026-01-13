let prompt = require('prompt-sync')()
let target = Number(prompt("Enter a target value "))
let arr = [10,3,44,55,1,3,5,7]
let index = -1
for(i = 0; i < arr.length;i++){
   if(arr[i] == target){
    index = i;
    break    
   } 
}
index==-1 ? console.log("element not found") : console.log("element found at " + index)