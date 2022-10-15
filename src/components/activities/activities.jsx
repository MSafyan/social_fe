import { useState } from 'react'
import Graph from './components/graph';
import Header from './components/header';
import Radios from './components/radios';
import Stats from './components/stats';
import Table from './components/table';

function Activities() {
    const [graphFilter, setFilter] = useState({ day: true, week: false, month: false, month3: false, all: false });

    const setFilterHandle = (key) => {
        switch (key) {
            case 1:
                setFilter({ day: true, week: false, month: false, month3: false, all: false })
                break;
            case 2:
                setFilter({ day: false, week: true, month: false, month3: false, all: false })
                break;
            case 3:
                setFilter({ day: false, week: false, month: true, month3: false, all: false })
                break;
            case 4:
                setFilter({ day: false, week: false, month: false, month3: true, all: false })
                break;
            case 5:
                setFilter({ day: false, week: false, month: false, month3: false, all: true })
                break;
            default:
                break;
        }
    }
    const data = [
        { name: '10:22', value: 4.300 },
        { name: '10:12', value: 323.3 },
        { name: '10:22', value: 4.300 },
        { name: '10:12', value: 323.3 },
        { name: '10:12', value: 320 },
        { name: '10:12', value: 323.3 },
        { name: '10:12', value: 32.3 },
        { name: '10:12', value: 323.3 },
        { name: '10:22', value: 4.300 },
        { name: '5:23', value: 20 },
        { name: '10:12', value: 323.3 },
        { name: '10:12', value: 299 },
        { name: '10:12', value: 323.3 },
    ];

    return (
        <>
            <div className="activity activity-graph section-t-space">
                <div className="container-fluid">
                    <Header
                        setFilterHandle={setFilterHandle}
                        graphFilter={graphFilter}
                    />
                    <Radios />
                    <Graph data={data} />
                </div >
            </div >
            <div className="activity activity-stats section-t-space">
                <div className="container-fluid">
                    <Stats />
                </div>
            </div>
            <div className="activity section-t-space section-b-space">
                <div className="container-fluid">
                    <div className="card-title"><h3>Transaction History</h3></div>
                    <Table />
                </div>
            </div>
        </>
    )
}

export default Activities