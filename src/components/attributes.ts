import { mount, tags, type Component } from '@tentjs/tent';

const { p } = tags;

type State = {
  msg: string;
};

const Attributes: Component<State> = {
  state: { msg: '' },
  view: ({ state }) => p(`This is your message: ${state.msg}`),
  mounted: ({ state, attr }) => {
    const msg = attr('msg');

    state.msg = msg ? msg : 'No message provided';
  },
};

mount(document.querySelector('.recipe'), Attributes);
