

export type ImageContextType = {
    uploadImage: () => void;
    loadImage: (image: ImageResource) => void;
    clearData: () => void;
    image: ImageResource | null;
    response: unknown | null;
    status: UploadStatus;
}

export  interface ImageResource {
    file: Blob;
    url: string;
}
  

export enum UploadStatus {
    FileNotLoaded = 'FileNotLoaded',
    ReadyToBeUploaded = 'ReadyToBeUploaded',
    Uploading = 'Uploading',
    Uploaded = 'Uploaded',
    Error = 'Error'
}