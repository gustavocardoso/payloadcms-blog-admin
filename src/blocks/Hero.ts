import { Block } from 'payload/types'
import backgroundOptions from './utils/bgOptions'
import buttonBgOptions from './utils/buttonBgOptions'

const Hero: Block = {
  slug: 'hero-block',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Options',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'type',
                  label: 'Type',
                  type: 'select',
                  options: [
                    {
                      label: 'Centered',
                      value: 'centered'
                    },
                    {
                      label: 'Two Columns',
                      value: 'two-columns'
                    }
                  ],
                  defaultValue: 'two-columns',
                  admin: {
                    width: '40%'
                  }
                },
                {
                  name: 'anchor',
                  label: 'Anchor',
                  type: 'text',
                  admin: {
                    width: '60%'
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
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  admin: {
                    width: '60%'
                  }
                },
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
                  ],
                  admin: {
                    width: '20%'
                  }
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
                  ],
                  admin: {
                    width: '20%',
                    condition: (data, siblingData, { user }) => {
                      console.log(siblingData.type)
                      if (siblingData.type === 'two-columns') {
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
              name: 'description',
              label: 'Description',
              type: 'textarea'
            },
            {
              name: 'buttons',
              type: 'array',
              label: 'Buttons',
              maxRows: 2,
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
                  options: buttonBgOptions
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
            },
            {
              type: 'group',
              name: 'effects',
              label: 'Effects on Hover',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'rotate',
                      type: 'checkbox',
                      defaultValue: false
                    },
                    {
                      name: 'scale',
                      type: 'checkbox',
                      defaultValue: false
                    },
                    {
                      name: 'shadow',
                      type: 'checkbox',
                      defaultValue: false
                    },
                    {
                      name: 'grayscale',
                      type: 'checkbox',
                      defaultValue: false
                    }
                  ]
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
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'images',
              admin: {
                condition: (data, siblingData, { user }) => {
                  if (siblingData.background === 'image') {
                    return true
                  } else {
                    return false
                  }
                }
              }
            },
            {
              type: 'row',
              fields: [
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
                    }
                  ],
                  defaultValue: 'none',
                  admin: {
                    width: '50%',
                    condition: (data, siblingData, { user }) => {
                      if (siblingData.background === 'image') {
                        return true
                      } else {
                        return false
                      }
                    }
                  }
                },
                {
                  name: 'backgroundTextColor',
                  type: 'select',
                  options: [
                    {
                      label: 'Light',
                      value: 'light'
                    },
                    {
                      label: 'Dark',
                      value: 'dark'
                    }
                  ],
                  defaultValue: 'light',
                  admin: {
                    width: '50%',
                    condition: (data, siblingData, { user }) => {
                      if (siblingData.background === 'image') {
                        return true
                      } else {
                        return false
                      }
                    }
                  }
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
