import {mount, tags, type Component} from '@tentjs/tent'
import * as styles from '../css/dropdown.module.css'

const {div, button, span, ul, li} = tags

type State = {
  open: boolean
  collection: Item[]
}

type Item = {
  title: string
  tag?: string | number
  attributes?: Record<string, unknown>
  selected?: boolean
  items?: Item[]
}

const collection: Item[] = [
  {title: 'Unread', tag: 4, selected: false},
  {title: 'Flagged', tag: 23, selected: false},
  // Section - with title
  {
    title: 'Tags',
    items: [
      {title: '#daretoshare24', selected: false},
      {title: '#tent', selected: false},
      {title: '#javascript', selected: false},
    ],
  },
  // Section - without title
  {
    title: '',
    items: [
      {
        title: 'Source',
        selected: false,
        attributes: {
          role: 'link',
          onclick: () => {
            window.open('https://github.com/tentjs/cookbook/tree/main/src/components/dropdown.ts', '_blank')
          }
        }
      }
    ]
  }
]

const Dropdown: Component<State> = {
  state: {open: true, collection},
  view: ({state}) => div([
    button('Filters', {onclick: () => state.open = !state.open}),
    ul(state.open ?
      state.collection.map(
        item => {
          // Section
          if (item.items) {
            const {title, items} = item

            return div([
              li([
                span(title),
                span(''),
              ]),
              ...items.map(item => single(item)),
            ])
          }

          // Single
          return single(item)
        }
      ) : []
    ),
  ], {className: styles.dropdown})
}

function single(item: Item) {
  return li([
    span(item.title),
    span(item.tag ?? '')
  ], {
    ...item.attributes,
    onclick: () => {
      if (typeof item.attributes?.onclick === 'function') {
        item.attributes.onclick()
      } else {
        item.selected = !item.selected
      }
    },
    className: item.selected ? styles.selected : '',
  })
}

mount(
  document.querySelector('.recipe'),
  Dropdown
)
