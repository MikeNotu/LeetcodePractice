const maxProfit = (prices) => {
    let minBuyPrice = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        const sellPrice = prices[i];
        const profit = sellPrice - minBuyPrice;
        max = Math.max(max, profit);
        minBuyPrice = Math.min(minBuyPrice, prices[i]);
    }
    return max;
};
