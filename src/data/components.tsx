type IGroup = 'input' | 'select';

type IComponent = Record<'name' | 'path' | 'group', string> & {
  group: IGroup
}

export const componentsList: IComponent[] = [
  {
    group: 'input',
    name: 'Input',
    path: '/components/input'
  },
  {
    group: 'select',
    name: 'Select',
    path: '/components/select'
  },
{
    group: 'select',
    name: 'Complex Select',
    path: '/components/complex-select'
  }
]