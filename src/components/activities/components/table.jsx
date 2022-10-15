function Table() {
    const data = [
        {
            action: 'Buy', amount: '139.993576 $WORD', date: '1:50pm 08/09/22'
        },
        {
            action: 'Sell', amount: '139.993576 $WORD', date: '1:50pm 08/09/22'
        },
        {
            action: 'Buy', amount: '139.993576 $WORD', date: '1:50pm 08/09/22'
        },
        {
            action: 'Send', amount: '139.993576 $WORD', date: '1:50pm 08/09/22'
        },
        {
            action: 'sell', amount: '139.993576 $WORD', date: '1:50pm 08/09/22'
        },
    ]

    const actionTransaction = (action) => {
        if (action.toLowerCase() === "buy") {
            return <BUY />
        } else if (action.toLowerCase() === "sell") {
            return <SELL />
        } else if (action.toLowerCase() === "send") {
            return <SEND />
        }
    }

    return (
        <div className="activity-table">
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Transaction</th>
                        <th>Amount</th>
                        <th>Time & Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(({ action, amount, date }, index) => (
                            <tr key={index}>
                                <td>
                                    {actionTransaction(action)}
                                    <span>{action}</span>
                                </td>
                                <td>{amount}</td>
                                <td>{date}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

const BUY = () => {
    return (
        <svg style={{ marginRight: '8px' }} width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16.5" cy="16" r="16" fill="#ABEDE6"></circle>
            <path d="M24.043 8.458a10.667 10.667 0 100 15.085M11.166 16h10.667" stroke="#1E1E28"></path>
            <path d="M15.166 21.334l-4-5.332 4-5.335" stroke="#1E1E28"></path>
        </svg>
    )
}
const SEND = () => {
    return (
        <svg style={{ marginRight: '8px' }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="16" fill="#9146ff"></circle>
            <path fill="#fff" d="M3.998 15.336l8.483 4.58 4.58 8.483L25.398 7zm12.769 8.308l-2.352-4.356 3.324-3.323-1.414-1.414-3.356 3.355-4.216-2.276 13.128-5.114z"></path>
        </svg>
    )
}
const SELL = () => {
    return (
        <svg style={{ marginRight: '8px' }} width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16.5" cy="16" r="16" fill="#FF3C64"></circle>
            <path d="M24.043 8.458a10.667 10.667 0 100 15.085M21.834 16H11.167" stroke="#fff"></path>
            <path d="M17.834 10.666l4 5.332-4 5.335" stroke="#fff"></path>
        </svg>
    )
}

export default Table