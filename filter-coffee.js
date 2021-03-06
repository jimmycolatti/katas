// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

function search(budget, prices) {
  const stores = []
  prices.forEach((bean) => {
    if (bean <= budget) {
      stores.push(bean)
    }
  })

  return stores
    .sort(function (a, b) {
      return a > b
    })
    .join()
  // return array of prices that are within budget
}

// "Should filter out the prices outside budget"
console.log(search(3, [6, 1, 2, 9, 2])) // "1,2,2"

// "Should filter out the prices outside budget"
console.log(search(14, [7, 3, 23, 9, 14, 20, 7])) // "3,7,7,9,14"

// "Should return an empty string when budget is zero"
console.log(search(0, [6, 1, 2, 9, 2])) // ""

// Other solutions

const search = (budget, prices) =>
  prices
    .filter((v) => v <= budget)
    .sort((a, b) => a - b)
    .toString()
