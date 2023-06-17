//sumZero problem

//Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

const sumZero = function(nums){
    let i=0,j=nums.length-1
    while(i<j){
        if(nums[i]+nums[j]==0) return [nums[i],nums[j]]
        else if(nums[i]+nums[j]>0) j--
        else i++
    }
   return 
}
console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3] 
// console.log(sumZero([-2,0,1,3])) // undefined
// console.log(sumZero([1,2,3]) ) // undefined
 

//countUniqueValues

//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
const countUniqueValues= function(nums){
    let i=0,j=1
    while(j<nums.length){
        if(nums[i]!=nums[j]){
            nums[i]=nums[j]
            i++
        }
        j++
    }
   return i+1
}
console.log(countUniqueValues([1,1,1,1,1,2])) // 2
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) //7
// console.log(countUniqueValues([]) ) //0
// console.log(countUniqueValues([-2,-1,-1,0,1]) ) //4


//Q1 Given two sorted arrays and a number x, find the pair whose sum is closest to x and the pair has an element from each array. 
// a).
// Input:  ar1[] = {1, 4, 5, 7};
//         ar2[] = {10, 20, 30, 40};
//         x = 32      
// Output:  1 and 30

const closest= function(arr,arr2,x){
   let res=[]
   let dist= Infinity
   let i=0,j=arr2.length-1
   while(i<j){
    if(Math.abs(arr[i]+arr2[j]-x)<dist){
        res=[arr[i],arr2[j]]
        dist= Math.abs(arr[i]+arr2[j]-x)
    }
    if((arr[i]+arr2[j]-x>0)) j--
    else i++
   }
   return res
}
ar1 = [1, 4, 5, 7]
ar2 = [10, 20, 30, 40],x=32
console.log(closest([1, 4, 5, 7],[10, 20, 30, 40],x))

//b).
// Input: arr[] = {10, 22, 28, 29, 30, 40}, x = 54

// Output: 22 and 30
const closestArr= function(ar,x){
    let res=[]
    let dist= Infinity
    let i=0,j=ar.length-1
    while(i<j){
     if(Math.abs(ar[i]+ar[j]-x)<dist){
         res=[ar[i],ar[j]]
         dist= Math.abs(ar[i]+ar[j]-x)
     }
     if((ar[i]+ar[j]-x>0)) j--
     else i++
    }
    return res
}
console.log(closestArr([10, 22, 28, 29, 30, 40],54))

// Q2.Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.
// Input:  arr[] = {0, -1, 2, -3, 1}
// Output:  (0 -1 1), (2 -3 1)
//  Explanation: The triplets with zero sum are 0 + -1 + 1 = 0 and 2 + -3 + 1 = 0  

const tripletSumZero= function(ar){
        ar.sort((a,b)=>a-b)
        let res=[]
        for(let i=0;i<ar.length;i++){
            let r=i+1,l=ar.length-1
            while(r<l){
                if (ar[i] + ar[r] + ar[l] === 0) {
                res.push([ar[i], ar[r], ar[l]]);
                r++;
                l--;
                } else if (ar[i] + ar[r] + ar[l] > 0) l--;
                else r++;
            }
        }
        return res

}
console.log(tripletSumZero([0, -1, 2, -3, 1]))

//Distance between two closest minimum

//Given an array of integers, find the minimum distance between any two occurrences of the minimum integer in the array.
// Input:
// 8
// 5 1 2 3 4 1 2 1
// where:
// First line represents the number of elements in the array.
// Second line represents the elements of the array.
// Output:
// 2

var isPowerOfFour = function(n) {
    if(n%4==0) return true
    return isPowerOfFour(n/4)
};
console.log(isPowerOfFour(5))

