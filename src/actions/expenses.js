import uuid from 'uuid'

// add expense
export const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}) => {
    return ({
      type: 'ADD_EXPENSE',
      expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
      }
    })
  }
// remove an expense by its id
  export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
  })

// edit an expense by its id
  export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  })