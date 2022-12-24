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

    return (
        <div className="modal complete-modal">
            <div className="header">
                <div className="icon">
                    <MdCheck size="30px" />
                </div>
                <h3>Uploaded Successfully!</h3>
            </div>
            <div className="image-overview-section">
                <img className="image-overview" src={link} alt="image" />
            </div>
            <div className="link-section">
                <input type="text" value={link}></input>
            </div>
            <button onClick={copyToClipboard} className="btn link-btn">Copy Link</button>
        </div>
    )
}