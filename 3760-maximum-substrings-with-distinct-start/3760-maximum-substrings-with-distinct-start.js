/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    let uniq = new Set(s)
    return uniq.size
    
};