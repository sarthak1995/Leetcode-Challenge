/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    const freq = {};
    for(let i = 0;i<s.length;i++){
        freq[s[i]] = (freq[s[i]] || 0) + 1;
    }
    
    for(let i = 0;i<s.length;i++){
        if(freq[s[i]] === 1)
            return i;
    }
    
    return -1;
};