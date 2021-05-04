/*
* @param {number[]} prices
* @return {number}

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

var maxProfit = function(prices) {
  // I: Array of integers
  // O: Integer
  // C: None
  // E: If no profit possible return 0

  // Create buy variable set to first index of array
  let buy = prices[0];
  // Create sell variable set to first index of array
  let sell = 0;
  // Create buyDay variable set to 0
  let buyDay = 0;
  // Create sellDay variable set to 0;
  let sellDay = 0;

  // Iterate through prices array
  for (let i = 0; i < prices.length; i++) {
    // If current index is < buy
    if (prices[i] < buy) {
      // Reassign buy to current index
      buy = prices[i];
      // Reassign buyDay to i
      buyDay = i;
      sellDay = i;
      // Else if current index is > sell
    } else if (prices[i] > sell && sellDay >= buyDay) {
      // Reassign sell to current index
      sell = prices[i];
      // Reassign sellDay to i
      sellDay = i;
    }
  }

  // If buyDay < sellDay
  if (buyDay < sellDay) {
    // Return sell - buy
    return sell - buy;
    // Else
  } else {
    // Return 0
    return 0;
  }
};