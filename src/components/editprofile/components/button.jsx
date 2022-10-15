import React from 'react'

function ProfileButton({ disabled, title }) {
    return (
        <div className='form-buttons'>
            <button disabled={disabled} type="submit" className='btn-solid button-primary'>{title}</button>
        </div>
    )
}

export default ProfileButton