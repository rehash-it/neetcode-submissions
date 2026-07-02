class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groupAnagram = {}

        
        for(let i=0; i <strs.length;i++){
            let alphabetArray = new Array(26).fill(0);  
            for ( let j=0; j< strs[i].length ;j++){
                alphabetArray[strs[i].charCodeAt(j)-97]++
            }
           const stringKey= JSON.stringify(alphabetArray);

            if(!groupAnagram[stringKey]){
                groupAnagram[stringKey] = []

            }
            groupAnagram[stringKey].push(strs[i])
            
        }
        const result = Object.values(groupAnagram);
        return result
        
    }
}
