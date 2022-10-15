import { useState } from 'react';
import LeftBox from './components/leftbox';
import RightBox from './components/rightbox';

function StoryModal({ profileMe, allStories, stories, userStories, setShowStoryModel, setUserStories }) {
    const [active, setActive] = useState(true)

    return (
        <div className="modal story-model" style={{ display: 'block' }} /*id="storyModel" tabIndex="-1" role="dialog" aria-labelledby="storyModel" aria-hidden="true"*/>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="story-bg">
                            <div className="container-fluid p-0">
                                <div className="row m-0">
                                    <LeftBox
                                        avatar={profileMe?.avatar}
                                        stories={stories}
                                        userStories={userStories}
                                        allStories={allStories}
                                        setActive={setActive}
                                        setUserStories={setUserStories}
                                    />
                                    <RightBox
                                        userStories={userStories}
                                        setShowStoryModel={setShowStoryModel}
                                        active={active}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoryModal