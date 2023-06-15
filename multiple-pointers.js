//sumZero problem

//Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

const sumZero= function(arr){
    let i,j
    i=0,j=arr.length-1
    while(i<j){
        if(arr[i]+arr[j]==0) return [arr[i],arr[j]]
        else if(arr[i]+arr[j]>0) {j--}
        else {i++}
    }
    return 
}
console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3] 
console.log(sumZero([-2,0,1,3])) // undefined
console.log(sumZero([1,2,3]) ) // undefined
 

//countUniqueValues

//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

const countUniqueValues= function(arr){
    let i,j
    i=0,j=1
    if(arr.length==0) return 0
    while(j<arr.length){
        if(arr[i]!=arr[j]) {
            i++;
            arr[i]=arr[j]
        }
        j++;
    }
    return i+1
}
console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) //7
console.log(countUniqueValues([]) ) //0
console.log(countUniqueValues([-2,-1,-1,0,1]) ) //4

//Q1 Given two sorted arrays and a number x, find the pair whose sum is closest to x and the pair has an element from each array. 
// a).
// Input:  ar1[] = {1, 4, 5, 7};
//         ar2[] = {10, 20, 30, 40};
//         x = 32      
// Output:  1 and 30

const closest = function (arr,arr2,x){
    let res=[]
    let dist=Infinity
    let i=0,j=arr2.length-1
    while (i<j) {
        if(Math.abs(arr[i]+arr2[j]-x)<dist){
            res=[arr[i],arr2[j]]
            dist=Math.abs(arr[i]+arr2[j]-x)
        }
        if((arr[i]+arr2[j]-x>0)) j--
        else i++
    }
    return res
}
ar1 = [1, 4, 5, 7]
ar2 = [10, 20, 30, 40],x=32
console.log(closest(ar1,ar2,x))

//b).
// Input: arr[] = {10, 22, 28, 29, 30, 40}, x = 54

// Output: 22 and 30

const closestOfArr = function (arr,x){
    let res=[]
    let dist=Infinity
    let i=0,j=arr.length-1
    while (i<j) {
        if(Math.abs(arr[i]+arr[j]-x)<dist){
            res=[arr[i],arr[j]]
            dist=Math.abs(arr[i]+arr[j]-x)
        }
        if((arr[i]+arr[j]-x>0)) j--
        else i++
    }
    return res
}
arr= [10, 22, 28, 29, 30, 40]
x=54
console.log(closestOfArr(arr,x))

// Q2.Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.
// Input:  arr[] = {0, -1, 2, -3, 1}
// Output:  (0 -1 1), (2 -3 1)
//  Explanation: The triplets with zero sum are 0 + -1 + 1 = 0 and 2 + -3 + 1 = 0  

const tripletSumZero= function(arr){           //3sum


    let res=[]
    arr.sort((a,b)=>a-b)
    for(let i=0;i<arr.length-2;i++){
        let l=i+1,r=arr.length-1
        while(l<r){
            sum=arr[i]+arr[l]+arr[r]        
            if(sum==0) res.push([arr[i],arr[l],arr[r]])
            if(sum<0) l++;
            else r--;
        }
    }
    return res
    
    // const result = [];

    // // Step 1: Sort the array in ascending order
    // arr.sort((a, b) => a - b);
  
    // // Step 2: Iterate through the array
    // for (let i = 0; i < arr.length - 2; i++) {
    //   let left = i + 1;
    //   let right = arr.length - 1;
  
    //   while (left < right) {
    //     const sum = arr[i] + arr[left] + arr[right];
  
    //     if (sum === 0) {
    //       result.push([arr[i], arr[left], arr[right]]);
    //       left++;
    //       right--;
    //     } else if (sum < 0) {
    //       left++;
    //     } else {
    //       right--;
    //     }
    //   }
    // }
  
    // // Step 3: Return the result
    // return result;
    
}
console.log(tripletSumZero([1,2,-2,-1]))

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

const dist = function(arr){
    let a=arr.length
    let minNum ;
    let i =1;
    let j =a-1;
    let result = []
    while(i<j){
        if(arr[i]>arr[j]){
            minNum = arr[j]
            i++;
            
        }else{
            minNum = arr[i]
            j--;
        }
 
    }
 
    for(let i=0; i<a; i++){
        if(minNum==arr[i]){
            result.push(i)
        }
    }
    let x = result.length
    if(x==1){
        return -1
    }
    return (result[x-1]-result[x-2])


    // let i=1,j=arr.length-1;
    // let minNum
    
    // while (i<j) {
    //     if(arr[i]>arr[j]){
    //         minNum=arr[j];i++
    //     }
    //     else {
    //         minNum=arr[i];j--
    //     }
    // }
    // console.log(minNum)
    // let res=[]
    // for(let i=0;i<arr.length;i++){
    //     if(minNumNum==arr[i]){
    //         res.push(i)
    //     }
    // }
    // if(res.length==1) return -1
    // return res[res.length-1]-res[res.length-2]
}
console.log(dist(5,1,2,3,4,1,2,1))


//codeZinger problem:
function solution(a,arr) {
    //Write your solution here
      let r=0;
      let l=arr.length-1
     let maxSum=-Infinity
      while(r<l){
      let sum=arr[r]+arr[l];
       if(sum>maxSum){
          maxSum=sum
       }
      if(arr[r]<arr[l]){
        r++;
      }else{
        l--;
      }
      }
      return maxSum
      
  }
  

// 189. Rotate Array:
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
                        // formula-(i+k)%ar.length, where k is steps
const rotateArr = function(nums,k){
    let i,j
    i=0,j=nums.length-1
    while(i<j){
        nums[i]=nums[i]+nums[j]
        nums[j]=nums[i]-nums[j]
        nums[i]=nums[i]-nums[j]
        i++,j--
    }
    i=0,j=(k%nums.length)-1
    while(i<j){
        nums[i]=nums[i]+nums[j]
        nums[j]=nums[i]-nums[j]
        nums[i]=nums[i]-nums[j]
        i++,j--
    }
    i=(k%nums.length),j=nums.length-1
    while(i<j){
        nums[i]=nums[i]+nums[j]
        nums[j]=nums[i]-nums[j]
        nums[i]=nums[i]-nums[j]
        i++,j--
    }
    return nums
}
let k=3
console.log(rotateArr([1,2,3,4,5,6,7], k))

// 11. Container With Most Water:maxProduct problem
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

const containerWithWater = function(arr){
    let r=0;
    let l=arr.length-1
   let maxProd=1
    while(r<l){
    let h=Math.min(arr[r],arr[l])
    let area 
    let w=l-r
    area =h*w
     if(area>maxProd){
        maxProd=area
        console.log(arr[r],arr[l],maxProd)
     }
    if(arr[r]<arr[l]){
      r++;
    }else{
      l--;
    }
    }
    return maxProd
    // let left = 0;
    // let right = height.length - 1;
    // let maxArea = 0;
  
    // while (left < right) {
    //   let h = Math.min(height[left], height[right]);
    //   let w = right - left;
    //   let area = h * w;
    //   maxArea = Math.max(maxArea, area);
  
    //   if (height[left] < height[right]) {
    //     left++;
    //   } else {
    //     right--;
    //   }
    // }
  
    // return maxArea; 
}
console.log("max prod:",containerWithWater([[0,2]]))

// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
const productExceptSelf= function(arr){
    let postfix,prefix 
    let res= new Array(arr.length).fill(1)
    postfix=1,prefix=1
    for(let i=0;i<arr.length;i++){}
    for(let i=0;i<arr.length;i++){
        res[i]=res[i]*prefix
        prefix=prefix*arr[i]
        // console.log(prefix,res[i],arr[i])
    }
    for(let i=arr.length-1;i>=0;i--){
        res[i]=res[i]*postfix
        postfix=postfix*arr[i]
        // console.log(postfix,res[i],arr[i])
    }
    return res
}
console.log(productExceptSelf([1,2,3,4]))  

//75. Sort Colors
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

const sortColors = function(nums){
    let l=0,mid=0,h=nums.length-1,temp
    while(mid<=h){
        if(nums[mid]==0){
            temp=nums[l]
            nums[l]=nums[mid]
            nums[mid]=temp
            l++
            mid++
            // console.log(nums)
        }
        else if(nums[mid]==2){
            temp=nums[h]
            nums[h]=nums[mid]
            nums[mid]=temp
            h--
            // console.log(nums)
        }
        else{
            mid++
            // console.log(nums)
        }
        // console.log(nums)
    }
    return nums
}
console.log(sortColors([2,0,2,1,1,0]))

//15. 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
const sum3 = function(nums){
    let res=[]
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length-2;i++){
        let l=i+1,h=nums.length-1,sum=0
        while(l<h){
            sum=nums[i]+nums[l]+nums[h]
            if(sum===0){ 
                res.push([nums[i],nums[l],nums[h]])
                while(nums[l+1]==nums[l]) l++
                while(nums[h-1]==nums[h]) h--
                l++
                h--
            }
            else if(sum>0) h--
            else i++
        }
        while(nums[i]===nums[i+1]) i++
    }
    return res
}
console.log(sum3([-1,0,1,2,-1,-4]))
