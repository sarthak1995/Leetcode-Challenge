/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const freq = {};
    
    for(let i = 0;i<magazine.length;i++){
        freq[magazine[i]] = (freq[magazine[i]] || 0) + 1;
    }
    
    for(let i = 0;i<ransomNote.length;i++){
        if(freq.hasOwnProperty(ransomNote[i])){
            freq[ransomNote[i]]--;
            if(freq[ransomNote[i]] < 0){
                return false;
            }
        }else{
            return false;
        }
    }

    return true
    
};
