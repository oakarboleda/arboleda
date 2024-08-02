import React from 'react'
import Gallery, { GalleryProps } from './Gallery'

export default {
  title: 'Gallery',
  component: Gallery
}

export const Default = (props: GalleryProps) => <Gallery {...props} />
