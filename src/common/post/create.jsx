import FeatherIcon from 'feather-icons-react';

export const InputDescription = ({ createPost, setInputHandle }) => {
    return (
        <div className="search-input input-style icon-right">
            <input
                value={createPost.description}
                onChange={setInputHandle}
                type="text"
                name="description"
                autoComplete='off'
                className="form-control enable"
                placeholder="write something here.." />
        </div>
    )
}

export const InputFile = ({ setInputHandle, acceptImages, acceptVideos }) => {
    return (
        <li>
            <input
                onChange={setInputHandle}
                className="choose-file"
                name='file'
                type="file"
                accept={[...acceptImages, ...acceptVideos]} />
            <h5><FeatherIcon icon="image" size={14} />Photo/Video</h5>
        </li>
    )
}