
import { LoadingModal } from "./components/loading-modal"
import { UploadCompleteModal } from "./components/upload-complete-modaL"
import { UploadFailureModal } from "./components/upload-failure-modal"
import { UploadModal } from "./components/upload-modal"
import { UploadStatus } from "./hooks/image-upload"

const statusWithModals = [{
      name: UploadStatus.FileNotLoaded,
      component: LoadingModal,
    },
    {
      name: UploadStatus.ReadyToBeUploaded,
      component: LoadingModal,
    },
    {
    name: UploadStatus.Uploading,
    component: LoadingModal
    },
    {
    name: UploadStatus.Uploaded,
    component: UploadCompleteModal
    },
    {
    name: UploadStatus.Error,
    component: UploadFailureModal
}];

  export function loadModal(currentStatus:UploadStatus){
    const index = statusWithModals.findIndex(status => currentStatus === status.name)
    if(index === -1){
      throw Error('Failed to find modal. Please check loadModal argument')
    }
    return statusWithModals[index].component
  }