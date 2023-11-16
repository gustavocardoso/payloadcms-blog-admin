import { slateEditor } from '@payloadcms/richtext-slate'
import { CollectionConfig } from 'payload/types'
import backgroundOptions from '../blocks/utils/bgOptions'
import buttonBgOptions from '../blocks/utils/buttonBgOptions'
import link from '../fields/link'

const CustomCtas: CollectionConfig = {
  slug: 'ctas',
  access: {
    read: () => true
  },
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'style']
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Style',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  type: 'select',
                  label: 'Style',
                  name: 'style',
                  options: [
                    {
                      label: 'Standard',
                      value: 'standard'
                    },
                    {
                      label: 'CTA With Image',
                      value: 'image'
                    },
                    {
                      label: 'CTA With Video',
                      value: 'video'
                    },
                    {
                      label: 'CTA With Button',
                      value: 'button'
                    }
                  ],
                  defaultValue: 'standard',
                  admin: {
                    width: '40%'
                  }
                },
                {
                  type: 'select',
                  name: 'size',
                  label: 'Size',
                  options: [
                    {
                      label: 'Full Width',
                      value: 'full'
                    },
                    {
                      label: 'Fixed Width',
                      value: 'fixed'
                    }
                  ],
                  defaultValue: 'fixed',
                  admin: {
                    width: '30%'
                  }
                },
                {
                  type: 'select',
                  name: 'spacing',
                  label: 'Spacing',
                  options: [
                    {
                      label: 'Vertical Spacing',
                      value: 'padding'
                    },
                    {
                      label: 'No Spacing',
                      value: 'no-padding'
                    }
                  ],
                  defaultValue: 'padding',
                  admin: {
                    width: '30%'
                  }
                }
              ]
            }
          ]
        },
        {
          label: 'Content',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'alignment',
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
                  ],
                  defaultValue: 'left',
                  admin: {
                    width: '30%'
                  }
                },
                {
                  name: 'contentPosition',
                  label: 'Content Position',
                  type: 'select',
                  options: [
                    {
                      label: 'Left',
                      value: 'left'
                    },
                    {
                      label: 'Right',
                      value: 'right'
                    }
                  ],
                  defaultValue: 'left',
                  admin: {
                    width: '30%',
                    condition: (data, siblingData, { user }) => {
                      return (
                        siblingData.style === 'image' ||
                        siblingData.style === 'button' ||
                        siblingData.style === 'video'
                      )
                    }
                  }
                }
              ]
            },
            {
              name: 'title',
              type: 'text'
            },
            {
              name: 'content',
              label: 'Content',
              type: 'richText',
              editor: slateEditor({
                // Move the admin property as shown below
                admin: {
                  elements: ['ul', 'link'],
                  leaves: ['bold', 'italic', 'strikethrough', 'underline']
                }
              })
            },
            {
              name: 'videoEmbed',
              label: 'Video Embed',
              type: 'textarea',
              admin: {
                rows: 5,
                condition: (data, siblingData, { user }) => {
                  return siblingData.style === 'video'
                }
              }
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'ctaImage',
                  type: 'upload',
                  relationTo: 'images',
                  admin: {
                    width: '70%',
                    condition: (data, siblingData, { user }) => {
                      return siblingData.style === 'image'
                    }
                  }
                }
              ]
            },
            {
              name: 'buttons',
              type: 'array',
              label: 'Buttons',
              maxRows: 2,
              fields: [
                link,
                {
                  name: 'style',
                  type: 'select',
                  options: buttonBgOptions
                }
              ]
            }
          ]
        },
        {
          label: 'Background',
          fields: [
            {
              name: 'background',
              type: 'select',
              options: backgroundOptions
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'backgroundImage',
                  type: 'upload',
                  relationTo: 'cta-images',
                  admin: {
                    width: '70%',
                    condition: (data, siblingData, { user }) => {
                      return siblingData.background === 'image'
                    }
                  }
                },
                {
                  name: 'backgroundOpacity',
                  type: 'select',
                  options: [
                    {
                      label: 'None',
                      value: 'none'
                    },
                    {
                      label: '20%',
                      value: '20'
                    },
                    {
                      label: '30%',
                      value: '30'
                    },
                    {
                      label: '50%',
                      value: '50'
                    },
                    {
                      label: '70%',
                      value: '70'
                    },
                    {
                      label: '90%',
                      value: '90'
                    }
                  ],
                  admin: {
                    width: '30%',
                    condition: (data, siblingData, { user }) => {
                      return siblingData.background === 'image'
                    }
                  }
                }
              ]
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

export default CustomCtas
