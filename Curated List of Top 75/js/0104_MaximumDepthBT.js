// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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
 * @return {number}
 */

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
 
const maxDepth = (root)=> {
    let maxDepth = 0;
    let BFS = (node,level)=>{
        if(node===null) return
        if(level>maxDepth)maxDepth=level;
        BFS(node.left,level+1)
        BFS(node.right,level+1)
    }
    BFS(root,1);
    return maxDepth
    
};