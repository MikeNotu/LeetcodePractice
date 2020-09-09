//I needed help getting the answer in javascript, so I looked up help in youtube
//I'll look up when to use var, let or const since I get how to get the answer, but if I put var instead of const and let the answer changes from 99% faster to 78%

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let result = 0
    let sign = 1
    
    if(x<0){
        sign = -1
        x = -x
    }
    
    while(x>0){
        const digit = x%10
        x=(x-digit)/10
        result = result * 10 +digit
    }
    
    result = result*sign
    
    if(result >2**31 -1) return 0
    if(result <-(2**31) -1) return 0
    
        
        return result;
    
    
    
};