const str="hellothere"
const longestDistinctSubstr = function (str){
    const n= str.length
    let s=0,e=0,maxlen=0
    let uniqueSub= new Set()
    while(e<n){
        if(uniqueSub.has(str[e])){
            uniqueSub.delete(str[s])
            s++
        }
        else
        {
            uniqueSub.add(str[e])
            const currlen= s-e+1
            maxlen=Math.max(currlen, maxlen)
            e++
        }
    }
    return str[maxlen]
}
console.log(longestDistinctSubstr(str))