function Radios() {
    return (
        <div className="activity-radio-wrapper d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <input type="radio" name="filter" id="USD" defaultChecked />
                <label htmlFor="USD">USD</label>
            </div>
            <div className="d-flex align-items-center">
                <input type="radio" name="filter" id="RLY" />
                <label htmlFor="RLY">$RLY</label>
            </div>
        </div>
    )
}

export default Radios