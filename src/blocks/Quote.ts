import { Block } from 'payload/types'

const Quote: Block = {
  slug: 'quote-block',
  // imageURL: 'http://localhost:3000/media/quote.png',
  // imageAltText: 'Quote block',
  labels: {
    singular: 'Quote',
    plural: 'Quotes'
  },
  fields: [
    {
      name: 'testimonial',
      type: 'relationship',
      relationTo: 'testimonials',
      maxDepth: 2
    }
  ]
}

export default Quote
