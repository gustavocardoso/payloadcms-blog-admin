type BackgroundOption = {
  label: string
  value: string
}

const backgroundOptions: Function = (): BackgroundOption[] => [
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
    label: 'Tertiary',
    value: 'tertiary'
  },
  {
    label: 'Light',
    value: 'light'
  },
  {
    label: 'Dark',
    value: 'dark'
  },
  {
    label: 'Image',
    value: 'image'
  }
]

export default backgroundOptions()
