import Add from './add';
import FriendStory from './friendstory';

function LeftBox({ avatar, stories, userStories,allStories, setUserStories, setActive }) {
    return (
        <div className="left-box col-xl-3 col-lg-4">
            <div className="model-title">
                <div className="title-main">
                    <h2>stories</h2>
                </div>
            </div>
            <div className="modal-flex">
                <Add avatar={avatar} />
                <FriendStory
                    allStories={allStories}
                    userStories={userStories}
                    stories={stories}
                    setActive={setActive}
                    setUserStories={setUserStories}
                />
            </div>
        </div>
    )
}

export default LeftBox