import FeatherIcon from 'feather-icons-react'
import { Tooltip } from 'react-tippy';

function Stats() {
    const data = [
        {
            text: 'The current exchange rate between one $WORD to $RLY. This rate changes as $WORD is bought and sold.',
            label: 'WORD', value: '156.290955'
        },
        {
            text: 'The total number of accounts that have transacted in $WORD.',
            label: 'Total Supporters', value: '418'
        },
        {
            text: 'The total number of transactions in $WORD.',
            label: 'Total Transactions', value: '2033'
        },
        {
            text: 'The amount of $RLY that is backing  $WORD.',
            label: 'Total RLY Backing', value: '1.4M'
        },
        {
            text: 'The USD value of $RLY that is backing $WORD.',
            label: 'Total Support Volume', value: '$50.3K'
        },
        {
            text: 'The amount of  $WORD. currently in circulation.',
            label: 'Circulating Supply', value: '$50.3K'
        },
    ]
    return (
        <div className="stats-wrapper d-flex justify-content-evenly">
            {
                data.map((item, index) => (
                    <div className="stats-block" key={index}>
                        <Tooltip
                            title={item.text}
                            position="top"
                            trigger="mouseenter"
                        >
                            <div className="stats-head">
                                <span>{item.label}</span>
                                <FeatherIcon icon='alert-circle' size={14} />
                            </div>
                        </Tooltip>
                        <h3 className="stats-value">{item.value}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default Stats