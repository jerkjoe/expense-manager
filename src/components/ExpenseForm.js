import React from 'react'

class ExpenseFrom extends React.Component {
  state = {
    description: '',
    amount: '',
    note: ''
  }
  onDescriptionChange = (e) => {
    const description =e.target.value
    this.setState(()=>({
      description
    }))
  }
  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(()=>{
      return {
        note
      }
    })
  }
  onAmountChange = e => {
    const amount = e.target.value

  }
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
          <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}/>
          <textarea placeholder="Add a note for your expense" value={this.state.note} onChange={this.onNoteChange}>
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseFrom