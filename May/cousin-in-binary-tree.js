/*
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    
    let pX = null;
    let pY = null;
    let depthX = null;
    let depthY = null;
    
    const dfs = (parent,curNode,curLevel)=>{
        
        if(curNode===null)
            return;
        
        if(curNode.val === x){
            pX = parent?parent.val:null;
            depthX = curLevel;
            console.log('X',pX,depthX)
        }
        
        if(curNode.val === y){
            pY =  parent?parent.val:null;
            depthY = curLevel;
            console.log('X',pY,depthY)
        }
        
        dfs(curNode,curNode.left,curLevel+1);
        dfs(curNode,curNode.right,curLevel+1);
        
    }
    
    dfs(null,root,1);
    
    if((pX!=pY) && (depthX===depthY))
        return true;
    
    return false
    
};