/* eslint-disable no-console */
const reconcileOrder = (existingBook, incomingOrder) => {
  let updatedBook = []

  if (existingBook.length === 0) {
    updatedBook.push(incomingOrder)
  }

  if (existingBook.length > 0) {
    updatedBook.push(incomingOrder)

    for (let i=0; i < existingBook.length; i++) {
      if (existingBook[i].type === incomingOrder.type) {
        updatedBook.unshift(existingBook[i])        
      }
      if (existingBook[i].type !== incomingOrder.type && existingBook[i].quantity === incomingOrder.quantity && existingBook[i].price === incomingOrder.price) {
        updatedBook.splice(0,1)
      }      
      if (existingBook[i].type !== incomingOrder.type && existingBook[i].quantity !== incomingOrder.quantity && existingBook[i].price !== incomingOrder.price) {
        updatedBook.unshift(existingBook[i])  
      }
      if (existingBook[i].type !== incomingOrder.type && existingBook[i].quantity > incomingOrder.quantity && existingBook[i].price === incomingOrder.price) {
        updatedBook.splice(0,1)
        updatedBook.unshift({type: existingBook[i].type, quantity: (existingBook[i].quantity - incomingOrder.quantity), price: incomingOrder.price})
      }
      


    }
  }

  return updatedBook
}

console.log(reconcileOrder([{ type: 'sell', quantity: 10, price: 6150 }], { type: 'sell', quantity: 12, price: 6000 }))

module.exports = reconcileOrder