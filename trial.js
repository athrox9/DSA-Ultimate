//reverse a list 

// const list = new Array(1,2,3,4)
// var f = function reverselist(){
//     let listreversed = new Array()
//     let x = 0
//     for (let i=list.length-1; i>-1; i--){
//         listreversed[x] = list[i]
//         x += 1
//     }    
//     console.log(listreversed);
// }
// f()

//return a int array into a number and then add string 

// const number = new Array(1,2,3,4)
// let value = ''
// number.forEach(n=>{
//     value += n
// })
// console.log(value);
// console.log(parseInt(value)+1);

//return largest number in array

// const number = new Array(1,3,9,4,5,8)
// let heap = [0]
// number.forEach(n=>{
//     if (n>heap[0]){
//         heap[0] = n
//     }
// })
// console.log(heap[0]);

//time complexity - 0(n), space complexity - 0(n)


//sort array

const number = new Array(13,4,1,5,8,13,4,3,0)
for (let i = 1; i<number.length;i++){
    var current = number[i]
    var j = i -1 
    while (j>=0 && number[j] > current){ // 13,4 sorted, then 13,1; then 1,4
        number[j+1] = number[j]
        j--
    }
    number[j+1] = current 
}
console.log(number);