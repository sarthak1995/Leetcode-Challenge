/*
In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.
*/

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    
    if(N===1)
        return 1;
    
    const freq = {};
    for(let i = 0;i<trust.length;i++){
        let [trustee,trusted] = trust[i];
        if(freq[trustee]==null){
            freq[trustee] = {in:0,out:0}
        }
         if(freq[trusted]==null){
            freq[trusted] = {in:0,out:0}
        }
        
        freq[trustee].out += 1;
        freq[trusted].in += 1;
    }
    
    let result = -1;
    
    Object.keys(freq).forEach(judge=>{
        if((freq[judge].in===(N-1)) && (freq[judge].out===0)){
            result = judge;
        }
            
    })
    return result;
    
};