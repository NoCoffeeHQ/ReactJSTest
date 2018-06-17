export const definitions = [
  {
    id: 'title',
    type: 'string',
    label: 'Title'
  },
  {
    id: 'subTitle',
    type: 'string',
    label: 'Sub title'
  },
  {
    id: 'backgroundColor',
    type: 'select',
    label: 'Background color',
    options: [['#53CF66', 'Paris Green'], ['#E1F0C4', 'Tea Green'], ['#7EE8FA', 'Electric Blue']]
  }
]

export const content = {
  title: 'Locomotive React',
  subTitle: 'A super simple CMS',
  backgroundColor: '#7EE8FA'
}
