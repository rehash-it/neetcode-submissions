class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length)
        return false ;
        const alphabetArray = new Array(26).fill(0);

        for(let i=0; i< s.length ; i++){
            alphabetArray[s.charCodeAt(i)-97] ++;
            alphabetArray[t.charCodeAt(i)-97] --;

        }
        for(const alphabet of alphabetArray){
            if( alphabet !== 0)
            return false
        }
        return true
        
    }
}
