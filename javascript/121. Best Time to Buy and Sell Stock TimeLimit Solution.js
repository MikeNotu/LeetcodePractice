/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let result = 0;
  
    for(let i = 0;i<prices.length-1;i++){
     
        for(let j = i+1;j<prices.length;j++){
            
            if(prices[j]-prices[i]>result){
                result = prices[j]-prices[i];
            }
            
        }
    }
    if(result>0){
        return result;
    }else{
        return 0;
    }
};