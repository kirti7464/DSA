//tail recursion(recursive condn is in the last line of func)-fast

//509. Fibonacci Number

var fib = function(n) {         //O(2^n)
    if(n==0) return 0
    if(n==1) return 1
    return fib(n-1)+fib(n-2)
    
};
console.log(fib(3))

//factorial
var fact=function(n){
    if(n==0) return 1
    return n*fact(n-1)
}
console.log(fact(5))

//sum of n natural number
var sumOfN = function(n) {
    if(n==1) return 1
    return n+sumOfN(n-1)
};
console.log(sumOfN(5))

//342. Power of Four

var isPowerOfFour = function(n) {
    if(n==1) return true
    if(n<1||n%4!=0) return false
    return isPowerOfFour(n/4)
    
}
console.log(isPowerOfFour(16))

//Product of Array elements
let arr=[3,5,2,8]
const prodOfArr= function(arr){
    
    if (arr.length==0) return 1
    let n=arr.pop()

    return n*prodOfArr(arr)
    
}
console.log(prodOfArr(arr))

//50. Pow(x, n)
const power= function(b,exp){
    if(exp==0) return 1
    return b*power(b,exp-1)
}
console.log(power(4,3))

//125. Valid Palindrome sentence
var isPalindrome = function(s) 
{
    let str=s.replace(/[^a-zA-Z0-9]/gi,"").toLowerCase()
    
    if(str.length==0) return true
    if(str[0]!==str[str.length-1]) return false

    return isPalindrome(str.slice(1,str.length-1))
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))

//10. Regular Expression Matching
var isMatch = function(s, p) {
    
};
console.log(isMatch("aa","a"))
console.log(isMatch("aa","a*"))
console.log(isMatch("ab",".*"))

//
var countGoodNumbers = function(n) {
    
};
console.log()

//Find product of digits of number using recursion
// Input: 1231 
// where:First line represents a value of N.
// Output:6 
// Explanation: For 1231, the product of its digits = 1*2*3*1=6 
var prodOfDigit= function(a){
    if(Math.abs(a)<10) return a
    n=a%10
    return n*prodOfDigit(Math.floor(a/10))
}
console.log(prodOfDigit(1231))

//Check Palindrome number using recursion
// Given an integer N, find whether N is a Palindrome using recursion. 
// Write a function that accepts an integer N. The function should return 1 if N is a palindrome else 0. 
// Input:121 
// Output:1
// The reverse of 121 is also 121.
var isNumPalindrome= function(n){
    let rev=0
    if(n==rev){
        
    }
}


//Find sum of array elements using recursion
var sumOfArray= function(a, arr){
    if(a==0) return arr
    return arr[0]+sumOfArray(a-1,arr.slice(1))
}
console.log("sum of array",sumOfArray(5,[1,2,3,4,5]))