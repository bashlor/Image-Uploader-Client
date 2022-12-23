import React, { useContext } from 'react';
import { ImageContext } from '../context/image-context';
import { MdOutlineClose } from 'react-icons/md';


export const UploadFailureModal = () => {
    const { clearData } = useContext(ImageContext)
    return <div className="modal failure-modal">
        <div className="header">
            <div className="icon">
                <MdOutlineClose/>
            </div>
            <h3>Uploaded Failed!</h3>
        </div>
        <div className="message-section">
            <p>Something went wrong. Please try again.</p>
            <button className='btn' onClick={clearData}>Try again</button>
        </div>
    </div>
}
