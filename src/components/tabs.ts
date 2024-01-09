import {mount, tags, type Component} from '@tentjs/tent'
import * as styles from '../css/tabs.module.css'

const {div, button} = tags

type State = {
  current: number
  content: Item[]
}

type Item = {
  title: string
  body: string
}

const content: Item[] = [
  {
    title: 'Tab #1',
    body: 'This is tab content #1',
  },
  {
    title: 'Tab #2',
    body: 'This is tab content #2',
  },
  {
    title: 'Tab #3',
    body: 'This is tab content #3',
  },
]

const Tabs: Component<State> = {
  state: {current: 0, content},
  view: ({state}) => div([
    div(
      state.content.map((c, i) =>
        button(c.title, {
          onclick: () => state.current = i,
          className: state.current === i ? styles.active : '',
        })
      ),
      {className: styles.buttons}
    ),
    div(
      state.content[state.current].body,
      {className: styles.content}
    ),
  ]),
}

mount(
  document.querySelector('.recipe'),
  Tabs
)
