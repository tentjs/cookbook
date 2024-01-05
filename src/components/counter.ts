import { mount, tags, type Component } from '@tentjs/tent'

const {button} = tags

type State = {
  count: number
}

const Counter: Component<State> = {
  state: {count: 0},
  view: ({state}) => button(
    `Clicked ${state.count} times`,
    {onclick: () => state.count++}
  )
}

mount(
  document.querySelector('.recipe'),
  Counter
)
