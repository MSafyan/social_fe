import { Link } from "react-router-dom"

function SidePanel() {
    return (
        <div className="sidebar-panel">
            <ul className="sidebar-icon">
                {Array(7).fill().map((a, i) => (
                    <li key={i}><Link to="#" className="tippy" ></Link></li>
                ))}
            </ul>
        </div>
    )
}

export default SidePanel