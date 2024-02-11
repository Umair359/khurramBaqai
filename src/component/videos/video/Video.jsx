import React from 'react'

const Video = () => {
    return (
        <iframe
            className='rounded-lg shadow-lg'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wHcxrs17-FQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    )
}

export default Video