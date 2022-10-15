import React from 'react'

function Image({ storyPreview }) {
    return (
        <>
            {
                storyPreview.file &&
                <div style={{ marginTop: '10px' }}>
                    <img src={storyPreview.file}
                        alt="story"
                        style={{ width: '100%', borderRadius: '5px' }} />
                </div>
            }
        </>
    )
}
export default Image