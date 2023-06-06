type BackgroundOption = {
  label: string
  value: string
}

const buttonBgOptions: Function = (): BackgroundOption[] => [
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
    label: 'Outline White',
    value: 'outline-white'
  },
  {
    label: 'Outline Black',
    value: 'outline-black'
  }
]

export default buttonBgOptions()
