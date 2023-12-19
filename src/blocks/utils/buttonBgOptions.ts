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
    label: 'Light (primary text)',
    value: 'button-light'
  },
  {
    label: 'Light (dark text)',
    value: 'button-light-dark'
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
