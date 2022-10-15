function Header({ setFilterHandle, graphFilter }) {
    return (
        <div className='card-title d-flex justify-content-between'>
            <h2>$6.451</h2>
            <div className='activity-graph-filter'>
                <span
                    className={`${graphFilter.day && 'active'}`}
                    onClick={() => setFilterHandle(1)}
                >1D</span>
                <span
                    className={`${graphFilter.week && 'active'}`}
                    onClick={() => setFilterHandle(2)}
                >1W</span>
                <span
                    className={`${graphFilter.month && 'active'}`}
                    onClick={() => setFilterHandle(3)}
                >1M</span>
                <span
                    className={`${graphFilter.month3 && 'active'}`}
                    onClick={() => setFilterHandle(4)}
                >3M</span>
                <span
                    className={`${graphFilter.all && 'active'}`}
                    onClick={() => setFilterHandle(5)}
                >ALL</span>
            </div>
        </div>
    )
}

export default Header