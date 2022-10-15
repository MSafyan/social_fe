import './loading.css'
import { useEffect } from 'react'
import $ from 'jquery'

function Loading() {
    useEffect(() => {
        $(document).ready(function () {
            setTimeout(function () {
                $('.loading-text').fadeOut('slow');
            }, 500);
            $('.loading-text').remove('slow');
        });
    }, [])

    return (
        <div className="loading-text">
            <div>
                <h1 className="animate">Loading</h1>
            </div>
        </div>
    )
}

export default Loading