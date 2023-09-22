type BackgroundOption = {
  label: string
  value: string
}

const buttonBgOptions: Function = (): BackgroundOption[] => [
  {
    label: 'Primary',
    value: 'button-primary'
  },
  {
    label: 'Secondary',
    value: 'button-secondary'
  },
  {
    label: 'Tertiary',
    value: 'button-tertiary'
  },
  {
    label: 'Dark',
    value: 'button-dark'
  },
  {
    label: 'Light',
    value: 'button-light'
  },
  {
    label: 'Highlight',
    value: 'button-highlight'
  },
  {
    label: 'Outline Light',
    value: 'button-outline-light'
  },
  {
    label: 'Outline Dark',
    value: 'button-outline-dark'
  },
  {
    label: 'Outline Highlight',
    value: 'button-outline-highlight'
  },
  {
    label: 'Outline Primary',
    value: 'button-outline-primary'
  },
  {
    label: 'Outline Secondary',
    value: 'button-outline-secondary'
  },
  {
    label: 'Outline Tertiary',
    value: 'button-outline-tertiary'
  }
]

export default buttonBgOptions()
