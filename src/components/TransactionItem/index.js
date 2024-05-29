import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {title, amount, type, id} = transactionDetails
  const onDeleteTransactionItem = () => {
    deleteTransaction(id)
  }

  return (
    <li className="table-row">
      <p className="title">{title}</p>
      <p className="amount">{amount}</p>
      <p className="type">{type}</p>
      <div className="delete-container">
        <button
          className="button"
          type="button"
          data-testid="delete"
          onClick={onDeleteTransactionItem}
        >
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
