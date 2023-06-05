import { Block } from 'payload/types'

const Hero: Block = {
  slug: 'hero',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Title'
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'titleTag',
                  label: 'Title Tag',
                  type: 'select',
                  options: [
                    {
                      label: 'H1',
                      value: 'h1'
                    },
                    {
                      label: 'H2',
                      value: 'h2'
                    }
                  ]
                },
                {
                  name: 'alignment',
                  label: 'Content Alignment',
                  type: 'select',
                  options: [
                    {
                      label: 'Left',
                      value: 'left'
                    },
                    {
                      label: 'Center',
                      value: 'center'
                    },
                    {
                      label: 'Right',
                      value: 'right'
                    }
                  ]
                }
              ]
            },
            {
              name: 'description',
              label: 'Description',
              type: 'richText',
              admin: {
                elements: ['h2', 'h3', 'ul'],
                leaves: ['bold', 'italic', 'strikethrough', 'underline']
              }
            },
            {
              name: 'buttons',
              type: 'array',
              label: 'Buttons',
              fields: [
                {
                  name: 'text',
                  label: 'Text',
                  type: 'text'
                },
                {
                  name: 'link',
                  label: 'Link',
                  type: 'text'
                },
                {
                  name: 'style',
                  type: 'select',
                  options: [
                    {
                      label: 'Primary',
                      value: 'primary'
                    },
                    {
                      label: 'Secondary',
                      value: 'secondary'
                    },
                    {
                      label: 'Outline White',
                      value: 'outline-white'
                    },
                    {
                      label: 'Outline Black',
                      value: 'outline-black'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: 'Media',
          fields: [
            {
              name: 'media',
              type: 'upload',
              relationTo: 'images'
            }
          ]
        },
        {
          label: 'Background',
          fields: [
            {
              name: 'background',
              type: 'select',
              options: [
                {
                  label: 'None',
                  value: 'none'
                },
                {
                  label: 'Primary',
                  value: 'primary'
                },
                {
                  label: 'Secondary',
                  value: 'secondary'
                },
                {
                  label: 'Image',
                  value: 'image'
                }
              ]
            },
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'images',
              admin: {
                condition: (data, siblingData, { user }) => {
                  console.log(data)
                  if (siblingData.background === 'image') {
                    return true
                  } else {
                    return false
                  }
                }
              }
            }
          ]
        },
        {
          label: 'Options',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'anchor',
                  label: 'Anchor',
                  type: 'text'
                },
                {
                  name: 'cssClasses',
                  label: 'CSS Classes',
                  type: 'text'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default Hero
