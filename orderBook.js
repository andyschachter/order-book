/* eslint-disable no-console */
const reconcileOrder = (existingBook, incomingOrder) => {
  let updatedBook = []

  if (existingBook.length === 0) {
    updatedBook.push(incomingOrder)
  }
  
  if (existingBook.length > 0 && existingBook[0].type === incomingOrder.type) {
    updatedBook.push(existingBook[0], incomingOrder)
  }

  return updatedBook
}

console.log(reconcileOrder([{ type: 'sell', quantity: 10, price: 6150 }], { type: 'sell', quantity: 12, price: 6000 }))

module.exports = reconcileOrder