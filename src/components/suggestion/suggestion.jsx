import SunIcon from "../../common/sunicon";
import Link_ from "../../common/link_";
import BoxSuggestion from "./components/boxsuggestion";

function Suggestion() {
    const url = "https://themes.pixelstrap.com/friendbook/assets/images/story/1.jpg"
    return (
        <div className="suggestion-box section-t-space">
            <div className="card-title">
                <h3>Active Landers</h3>
                <div className="settings">
                    <div className="setting-btn setting-dropdown ms-2">
                        <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                            <SunIcon />
                            <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                <ul>
                                    <Link_ index={1} icon="user" to="#" title="see all" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="suggestion-content ratio_115">
                <BoxSuggestion url={url} />
            </div>
        </div>
    )
}

export default Suggestion