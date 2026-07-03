class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {

        let encodedStr = ""
        for(const str of strs){
            encodedStr += str.length + "#" + str;
        }
        return encodedStr;


    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let decodedarr= [];
        let index =0;
        

        
        while(index < str.length){

           let lengthStr = "";

            while (str[index] !== "#") {
                lengthStr += str[index];
                index++;
            }

           let length = Number(lengthStr);
           index++;

           let word = str.slice(index, index + length);

           decodedarr.push(word);

            index += length;

        }
        return decodedarr;

    }
}
