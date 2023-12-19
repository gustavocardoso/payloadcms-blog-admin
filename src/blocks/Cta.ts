import { Block } from 'payload/types'

const Cta: Block = {
  slug: 'cta-block',
  // imageURL: 'http://localhost:3000/media/cta.png',
  // imageAltText: 'Cta block',
  labels: {
    singular: 'CTA',
    plural: 'CTAs'
  },
  fields: [
    {
      name: 'cta',
      type: 'relationship',
      relationTo: 'ctas',
      maxDepth: 2
    }
  ]
}

export default Cta
