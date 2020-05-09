/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let low = 0;
    let high = num;
    while(low<=high){
        let mid = parseInt((low+high)/2);
        let sq = mid*mid;
        if(sq==num)
            return true;
        else if(sq>num){
            high = mid - 1;
        }else{
            low = mid+1;
        }
    }
    return false;
    
};