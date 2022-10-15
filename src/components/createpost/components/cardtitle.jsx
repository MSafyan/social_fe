import FeatherIcon from 'feather-icons-react';

function CardTitle() {
    return (
        <div className="card-title">
            <h3>create post</h3>
            <ul className="create-option">
                <li>
                    <h5><FeatherIcon icon="video" size={15} />go live</h5>
                </li>
            </ul>
        </div>
    )
}

export default CardTitle