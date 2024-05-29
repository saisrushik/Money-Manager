import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let income = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += eachTransaction.amount
      }
    })
    return income
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expenses = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenses += eachTransaction.expenses
      }
    })
    return expenses
  }

  getBalance = (income, expenses) => {
    const balance = income - expenses
    return balance
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOptionType = event => {
    this.setState({optionId: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const optionType = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = optionType
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: amountInput,
      type: displayText,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const updatedTransactionsList = transactionsList.filter(
      eachTransaction => eachTransaction.optionId !== id,
    )
    this.setState({
      transactionsList: updatedTransactionsList,
    })
  }

  render() {
    const {transactionsList, titleInput, amountInput, optionId} = this.state
    const income = this.getIncome()
    const expenses = this.getExpenses()
    const balance = this.getBalance(income, expenses)

    return (
      <div className="bg-container">
        <div className="profile-container">
          <h1 className="profile-name">Hi, Richard</h1>
          <p className="profile-description">
            welcome back to your{' '}
            <span className="span-text">Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails income={income} expenses={expenses} balance={balance} />
        </div>
        <div className="bottom-container">
          <div className="transcation-container">
            <form onSubmit={this.addTransaction}>
              <h1 className="transaction-heading">Add Transaction</h1>
              <label htmlFor="transaction-title" className="transaction-title">
                TITLE
              </label>
              <br />
              <input
                onChange={this.onChangeTitle}
                value={titleInput}
                type="text"
                id="transaction-title"
                className="transaction-input"
              />
              <br />
              <label
                htmlFor="transaction-amount"
                className="transaction-amount"
              >
                AMOUNT
              </label>
              <br />
              <input
                onChange={this.onChangeAmount}
                type="text"
                id="transaction-amount"
                className="amount-input"
                value={amountInput}
              />
              <br />
              <label htmlFor="selectedOption" className="type-title">
                TYPE
              </label>
              <br />
              <select
                onChange={this.onChangeOptionType}
                id="selectedOption"
                className="select-container"
                value={optionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option
                    key={eachOption.optionId}
                    value={eachOption.optionId}
                    className="options"
                  >
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <div className="history-transactions">
            <h1 className="transaction-header">History</h1>
            <div className="transactions-table-container">
              <ul className="transactions-table">
                <li className="table-header">
                  <p className="table-header-cell">Title</p>
                  <p className="table-header-cell">Amount</p>
                  <p className="table-header-cell">Type</p>
                </li>
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
