/* eslint-disable no-console */
const reconcileOrder = (existingBook, incomingOrder) => {
  let updatedBook = []

  if (existingBook.length === 0) {
    updatedBook.push(incomingOrder)
  }

  if (existingBook.length > 0) {
    for (let i=0; i < existingBook.length; i++) {
      if (existingBook[i].type === incomingOrder.type) {
        updatedBook.push(existingBook[i], incomingOrder)        
      }
      if (existingBook[i].type !== incomingOrder.type && existingBook[i].quantity === incomingOrder.quantity && existingBook[i].price === incomingOrder.price) {
        i++
      }      
      if (existingBook[i].type !== incomingOrder.type && existingBook[i].quantity !== incomingOrder.quantity && existingBook[i].price !== incomingOrder.price) {
        updatedBook.push(existingBook[i], incomingOrder)  
      }


    }
  }

  return updatedBook
}

console.log(reconcileOrder([{ type: 'sell', quantity: 10, price: 6150 }], { type: 'sell', quantity: 12, price: 6000 }))
let object = { type: 'sell', quantity: 12, price: 6000 }
console.log(object)

module.exports = reconcileOrder