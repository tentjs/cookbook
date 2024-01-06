import {mount, tags, type Component} from '@tentjs/tent'

const {p} = tags

type State = {
  msg: string
}

const AttributePassing: Component<State> = {
  state: {msg: ''},
  view: ({state}) => p(`This is your message: ${state.msg}`),
  mounted: ({state}) => {
    const el = document.querySelector('.recipe')
    if (!el) return

    state.msg =
      el.attributes.getNamedItem('msg')?.value ??
      'Attribute `msg` was not set'

    el.removeAttribute('msg') // optional
  }
}

mount(
  document.querySelector('.recipe'),
  AttributePassing
)
