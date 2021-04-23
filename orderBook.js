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
      if (existingBook[i].type !== incomingOrder.type && existingBook[i].quantity < incomingOrder.quantity && existingBook[i].price === incomingOrder.price) {
        updatedBook.splice(0,1)
        updatedBook.unshift({type: incomingOrder.type, quantity: (incomingOrder.quantity - existingBook[i].quantity), price: incomingOrder.price})
        const quantity = incomingOrder.quantity - existingBook[i].quantity
        incomingOrder = {...incomingOrder, quantity}
      }
      if (existingBook[i].type !== incomingOrder.type && existingBook[i].quantity === incomingOrder.quantity && existingBook[i].price > incomingOrder.price) {
        updatedBook.splice(0,1)  
      }
      if (existingBook[i].type !== incomingOrder.type && existingBook[i].quantity === incomingOrder.quantity && existingBook[i].price < incomingOrder.price) {
        updatedBook.unshift(existingBook[i])
        i++
        updatedBook.splice(1,0,existingBook[i])
      }      
    }
  }

  return updatedBook
}

module.exports = reconcileOrder