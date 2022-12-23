import React, { useContext, useEffect, useRef, useState } from "react"
import { MdOutlineClose } from "react-icons/md";
import { UploadStatus } from "../@types/@types.image";
import { ImageContext } from "../context/image-context";





export const UploadModal = () => {

    const { loadImage , status , uploadImage ,  image , clearData } = useContext(ImageContext)

    const hiddenFileInput = useRef(null);
    const uploadSection = useRef(null);

    const handleDragEnter = e => {
        e.preventDefault();
        e.stopPropagation();
      };
      const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();
      };
      const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
      };
      const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        const { files } = e.dataTransfer;
        loadImage({ file: files[0], url: URL.createObjectURL(files[0]) });
      };

      const handleClick = e => {
        hiddenFileInput.current.click();

      }

      const handleFileUpload = (e) => {
        const fileObjectURL = URL.createObjectURL(e.target.files[0]);
        loadImage({file:e.target.files[0],url:fileObjectURL})
      }

      const sendToServer = () => {
        uploadImage()
      }

      const removeImage = (e) => {
        e.stopPropagation();
        clearData()
      }

    return (
    <div className="modal upload-modal">
        <div className="header">
            <h3>Upload your image</h3>
                <p>File should be Jpeg, Png...</p>
        </div>
    <div className="image-section"
                    onDrop={e => handleDrop(e)}
                    onDragOver={e => handleDragOver(e)}
                    onDragEnter={e => handleDragEnter(e)}
                    onDragLeave={e => handleDragLeave(e)}
                    onClick={handleClick}
                    style={
                      {backgroundImage: status === UploadStatus.ReadyToBeUploaded ? `url(${image.url})` : 'none',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                     }
                    }>
      <div style={{visibility : status === UploadStatus.ReadyToBeUploaded ? 'visible': 'hidden'}} className="remove-icon"
        onClick={removeImage}
      >
        <MdOutlineClose className="cross" size="20px" />
      </div>
      <div>
        {status === UploadStatus.FileNotLoaded &&  
        <><img className="image-figure" src="./image.svg" />
          <p>Drag & Drop your image here</p>
        </>
        }

      </div>
    </div>
    { status === UploadStatus.FileNotLoaded && <p className="alternative-label">Or</p>}
    {status === UploadStatus.ReadyToBeUploaded ? 
      <button onClick={sendToServer} className="btn btn-file-upload">Upload</button> 
      : <button onClick={handleClick} className="btn btn-file-upload">Choose a file</button>
      }
            
            <input type="file"  accept="image/jpeg, image/png, image/webp " onChange={handleFileUpload} style={{display:'none'}} ref={hiddenFileInput} />
    </div>
  )
}