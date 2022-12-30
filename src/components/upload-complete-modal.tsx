import React, { useContext } from "react";
import { MdCheck } from 'react-icons/md'
import { ImageContext } from "../context/image-context";

export const UploadCompleteModal = () => {
  const { response } = useContext(ImageContext);

  const link = (response as Record<string,unknown>).link as string;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).catch((err) => {
      throw new Error(`Failed to copy link to the clipboard ${err}`,);
    });
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    copyToClipboard();
    e.target.select();
  }

    return (
        <div className="modal complete-modal">
            <div className="header">
                <div className="icon">
                    <MdCheck size="30px" />
                </div>
                <h3>Uploaded Successfully!</h3>
            </div>
            <div className="image-overview-section">
                <a href={link} rel="noreferrer" target="_blank" >
                <img className="image-overview" src={link} alt="image" />
                </a>
  
            </div>
            <div className="link-section">
                <input type="text" onFocus={handleFocus} value={link}></input>
            </div>
            <button onClick={copyToClipboard} className="btn link-btn">Copy Link</button>
        </div>
    )
}