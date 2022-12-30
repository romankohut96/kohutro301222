import {images} from './assets'

export const getImage = (photo: string) => {
  const photoNumber = Number(photo.split(".")[0])
  return images[photoNumber - 1] 
}