//242. Valid Anagram (https://leetcode.com/problems/valid-anagram/)

const validAnagram = function(str,str2){
    if(str.length!=str2.length) return false
    let obj={},obj2={}
    for(let i=0;i<str.length;i++){
        obj[str[i]]=(obj[str[i]]||0)+1
    }
    for(let i=0;i<str2.length;i++){
        obj2[str[i]]=(obj2[str[i]]||0)+1
    }
    for(let ch in obj){
        if(obj2[ch]){
            if(obj[ch]!=obj2[ch]) return false
        }
        else{
            return false
        }
    }
    return true
}
console.log(validAnagram("anagram","nagaram"))
console.log(validAnagram("rat","car"))

//347. Top K Frequent Elements

const topKElement= function(num,k){
    let obj={},arr=[]
    for(let i=0;i<num.length;i++){
        obj[num[i]]=(obj[num[i]]||0)+1
    }
    let entries=Object.entries(obj)
    entries.sort((a,b)=>b[1]-a[1])
    
    for(let i=0;i<k;i++){
        arr.push(+entries[i][0])
    }
    return arr
}
console.log(topKElement([4,1,-1,2,-1,2,3],2))
console.log(topKElement([1,1,1,2,2,3],2))

//451. Sort Characters By Frequency

const sortCharByFreq= function(str){
    let map=new Map()
    for(let i=0;i<str.length;i++){
        char= map.get(str[i])
        map.set(str[i],(char||0)+1)
    }
    let keys= [...map.keys()].sort((a,b)=>map.get(b)-map.get(a))
    let s=""
    for(let char of keys){
        s+=char.repeat(map.get(char))
    }
    return s
}
console.log(sortCharByFreq("tree"))

//75. Sort Colors

const sort012= function(nums){
    let map=new Map()
    for(let i=0;i<nums.length;i++){
        n=map.get(nums[i])
        map.set(nums[i],(n||0)+1)
    }
    let key=[...map.keys()].sort((a,b)=>a-b)
    // console.log(key)
    let res=[]
    for(let char of key){
      for(let i=0;i<map.get(char);i++)  
      res.push(char)
    }
    return res
}
console.log(sort012([2,0,2,1,1,0]))//0,0,1,1,2,2

//Calculate the frequency of each word in the given string.

const freqOfEachWord = function(str){
    let obj={}
    let s=str.split(" ")
    for(let i=0;i<s.length;i++){
        s[i]=s[i].replace(/[^a-zA-Z0-9]/gi,"").toLowerCase()
    }
    // str=s.replace(/[^a-zA-Z0-9]/gi,"").toLowerCase()
    for(let i=0;i<s.length;i++)
    {
        obj[s[i]]=(obj[s[i]]||0)+1
    }
    return obj

}
console.log(freqOfEachWord("Success is not the key of Happiness, Happiness is the key of success"))     

//1. Two Sum
const twoSum= function(nums,target){
    let arr= new Array(2)
    let map= new Map()
    for(let i=0;i<nums.length;i++){
        compli=target-nums[i]
        if(map.has(compli)){
            arr[0]=i
            arr[1]=map.get(compli)
            break
        }
        map.set(nums[i],i)
    }
    return arr
}
console.log(twoSum([2,7,11,15],9))

//1122. Relative Sort Array

const relativeSortArr= function(arr1,arr2){
    let countArr= Array(1001).fill(0)
    for(let i=0;i<arr1.length;i++){
        countArr[arr1[i]]++
    }
    let sortIndex=0
    for(let i=0;i<arr1.length;i++){
        while(countArr[arr2[i]]>0){
            arr1[sortIndex]=arr2[i]
            countArr[arr2[i]]--
            sortIndex++
        }
    }
    for(let i=0;i<1001;i++){
        while(countArr[i]>0){
            arr1[sortIndex]=i
            countArr[i]--
            sortIndex++
        }
    }
    return arr1
}
console.log(relativeSortArr([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))

//560. Subarray Sum Equals K
const subArrEqualsK= function(nums,k){
    let count=0,prefixSum=0
    let map=new Map()
    map.set(0,1)
    for(let i=0;i<nums.length;i++){
        prefixSum+=nums[i]
        count+= map.get(prefixSum-k)||0
        map.set(prefixSum,(map.get(prefixSum)||0)+1)
    }
    return count
}
console.log(subArrEqualsK([1,1,1],2))

//1051. Height Checker

const heightChecker = function(heights){
    let ans=0,countArr=Array(101).fill(0)
    for(let i=0;i<heights.length;i++){
        countArr[heights[i]]++
    }
    let index=1
    for(let i=0;i<heights.length;i++){
        while(countArr[index]==0){
            index++
        }
        if(index!=heights[i]){
            ans++
        }
        countArr[index]--
    }
    return ans
}
console.log(heightChecker([1,1,4,2,1,3]))

// 2491. Divide Players Into Teams of Equal Skill

const dividePlayer= function(skill){
    let ans=0
    skill.sort((a,b)=>a-b)
    let low=0,high=skill.length-1
    let eachGrpSum=skill[0]+skill[skill.length-1]
    while(low<high){
        if(skill[low]+skill[high]==eachGrpSum){
            ans+=skill[low]*skill[high]
        }
        else return -1
        low++
        high--
    }
    return ans
}
console.log(dividePlayer([3,2,5,1,3,4]))

//881. Boats to Save People

const boats= function(p,limit){
    let boats=0
    let low=0,high=p.length-1
    p.sort((a,b)=>a-b)
    while(low<=high){
        if(p[low]+p[high]<=limit){
            low++
            high--
        }
        else{
            high--
        }
        boats++
    }
    return boats
}
console.log(boats([3,2,2,1],3))