const nums = [3,4,5,7]
const target = 9

//Brute-Force 

//0(n²)
// const twoSum = function(nums, target){
//     for (let i = 0; i< nums.length; i++){
//         for (let j = i+1; j<nums.length; j++){
//             if (nums[i] + nums[j] == target){
//                 console.log([i,j]);
//             }
//         }
//     }
// }
// twoSum(nums,target)

//Hash-Map

//0(n)
// var twoSum = function(nums, target){
//     var map = {}
//     for (let i = 0; i<nums.length; i++){
//         var complementpair = target - nums[i]
//         if (map[complementpair] !== undefined){
//             console.log([map[complementpair], i])
//         }
//         else {
//             map[nums[i]] = i 
//         }
//     }
// }
// twoSum(nums,target)

//Two-Pointer

//0(n)
// var twoSum = function(nums, target){
//     let a = 0
//     let b = nums.length - 1
//     while (nums[a]+nums[b] != target){
//         if ( nums[a]+nums[b] > target){
//             b--
//         }
//         else if (nums[a]+nums[b] < target){
//             a++
//         }
//     }
//     console.log([a,b]);
// }
// twoSum(nums, target)
