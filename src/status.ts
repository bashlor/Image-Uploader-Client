
import { LoadingModal } from "./components/loading-modal"
import { UploadCompleteModal } from "./components/upload-complete-modal"
import { UploadFailureModal } from "./components/upload-failure-modal"
import { UploadStatus } from "./@types/@types.image";

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