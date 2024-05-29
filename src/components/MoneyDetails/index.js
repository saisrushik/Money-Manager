import './index.css'

const MoneyDetails = props => {
  const {income, expenses, balance} = props
  return (
    <ul className="money-details-container">
      <li className="balance-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            className="image"
            alt="balance"
          />
        </div>
        <div>
          <p className="heading">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            RS {balance}
          </p>
        </div>
      </li>
      <li className="income-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            className="image"
            alt="income"
          />
        </div>
        <div>
          <p className="heading">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            RS {income}
          </p>
        </div>
      </li>
      <li className="expenses-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            className="image"
            alt="expenses"
          />
        </div>
        <div>
          <p className="heading">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            RS {expenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
