import  React, { useCallback } from 'react'
import { IconContext } from 'react-icons'
import { UploadStatus } from './@types/@types.image'
import './App.scss'
import { LoadingModal } from './components/loading-modal'
import { UploadCompleteModal } from './components/upload-complete-modal'
import { UploadFailureModal } from './components/upload-failure-modal'
import { UploadModal } from './components/upload-modal'
import  { ImageContext } from './context/image-context'




function App() {

  const { status } = React.useContext(ImageContext)

  const renderModal = useCallback(() => {

    switch(status){
      case UploadStatus.FileNotLoaded:
        return <UploadModal />
      case UploadStatus.ReadyToBeUploaded:
        return <UploadModal />
      case UploadStatus.Uploading:
        return <LoadingModal />
      case UploadStatus.Uploaded:
        return <UploadCompleteModal />
      case UploadStatus.Error:
        return <UploadFailureModal />
      default:
        return  null;
    }
  },[status])

  return (

      <div className="App">
        <IconContext.Provider value={{ color:  'white', size: '50px'}}>
          {renderModal()}
        </IconContext.Provider>
      </div>

  )
}

export default App
