import { Block } from 'payload/types'

const Video: Block = {
  slug: 'video-block',
  // imageURL: 'http://localhost:3000/media/video.png',
  // imageAltText: 'Video block',
  labels: {
    singular: 'Video',
    plural: 'Videos'
  },
  fields: [
    {
      name: 'videoEmbed',
      label: 'Embed Code',
      type: 'textarea'
    },
    {
      name: 'caption',
      type: 'text'
    }
  ]
}

export default Video
