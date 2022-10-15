import { useState } from 'react';
import Api from '../../api/api';
import Image from './components/image';
import Input from './components/input';
// import $ from 'jquery'

function CreateStory({ setStoryLoader, setShowStoryModel }) {

    const acceptImages = ["image/png", "image/jpg", "image/jpeg", "image/gif"]
    const [storyPreview, setStoryPreview] = useState({ file: '' })
    const [storyFile, setStoryFile] = useState()
    const [disableStoryBtn, setDisableStoryBtn] = useState(false)

    const setInputHandle = (e) => {
        setStoryFile(e.target.files[0])

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            if (reader.readyState === 2) {
                setStoryPreview(() => ({ [e.target.name]: reader.result }))
            }
        };
    }

    const createStoryHandle = async (e) => {
        e.preventDefault();
        if (storyPreview.file && storyFile) {
            setDisableStoryBtn(true)
            // setStoryLoader(true)
            const formData = new FormData();
            formData.append("image", storyFile)

            const res = await Api.createStory(formData)
            if (res.status === 201) {
                // setDisableStoryBtn(false)
                // setStoryPreview({ file: '' })
                // setStoryFile(null)
                // $('body').removeClass('filter-blur');
                // $('body').css('overflow-y', 'auto');
                // $('.story-model').css('overflow-y', 'auto');
                // setShowStoryModel(false)

                const res2 = await Api.sendFollowersNotification({
                    notification: `added a story.`
                })
                if (res2.status === 201) {
                    window.location.reload()
                }
            } else {
                setDisableStoryBtn(false)
                setStoryPreview({ file: '' })
                setStoryFile(null)
            }
        }
    }

    return (
        <div className="modal fade" id="addStory" aria-labelledby="addStory" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body p-0">
                        <form onSubmit={createStoryHandle} className="create-post">
                            <div className="static-section">
                                <div className="card-title">
                                    <h3>Add Story</h3>
                                </div>
                            </div>
                            <Image storyPreview={storyPreview} />
                            <Input
                                setInputHandle={setInputHandle}
                                acceptImages={acceptImages}
                            />
                            <div id="post-btn1" className="post-btn d-block">
                                <button
                                    type="submit"
                                    className="enable"
                                    disabled={disableStoryBtn}
                                >post story</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateStory