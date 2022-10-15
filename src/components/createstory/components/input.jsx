import FeatherIcon from 'feather-icons-react'

function Input({ setInputHandle, acceptImages }) {
    return (
        <ul className="create-btm-option">
            <li>
                <input
                    onChange={setInputHandle}
                    className="choose-file"
                    name='file'
                    required
                    type="file"
                    accept={acceptImages} />
                <h5><FeatherIcon icon="image" size={14} />Photo</h5>
            </li>
        </ul>
    )
}

export default Input