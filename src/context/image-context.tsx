import React, { useState } from 'react';
import { ImageContextInterface, ImageResource } from '../@types/@types.image';
import { UploadStatus } from '../@types/@types.image';

interface Props {
    children: React.ReactNode;
}


//@ts-expect-error dont know how to type this
export const ImageContext = React.createContext<ImageContextInterface>({});



const ImageContextProvider: React.FC<Props> = ({ children }) => {
    const [image,setImage] = useState<ImageResource | null>(null);
    const [response,setResponse] = useState<unknown|null>(null)
    const [status,setStatus] = useState<UploadStatus>(UploadStatus.FileNotLoaded)


     function uploadImage(){

      if(image?.file){

        const formData = new FormData();
        formData.append('file', image.file);

        setStatus(UploadStatus.Uploading)

        const apiUrl = new URL(`${import.meta.env.VITE_API_URL}/upload`)

        fetch(apiUrl.href,{ method: 'POST' , body:formData}).then(response => {
          if(!response.ok){
            throw new Error('Something went wrong')
          }

          response.json().then(data => {
            setStatus(UploadStatus.Uploaded)
            setResponse(data)
          })

        }).catch(error => {
          setStatus(UploadStatus.Error)
          setResponse(error)
        })
      }

    }

    function loadImage(image:ImageResource){
        setImage(image);
        setStatus(UploadStatus.ReadyToBeUploaded)
    }

    function clearData(){
        setStatus(UploadStatus.FileNotLoaded)
        setImage(null);
        setResponse(null)
    }
    
    return(
        <ImageContext.Provider value={{image,uploadImage,loadImage,clearData,response, status}}>
            {children}
        </ImageContext.Provider>
    )
}

export  default ImageContextProvider;