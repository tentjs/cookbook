import { mount, tags, type Component } from '@tentjs/tent';

const { ul, li } = tags;

type State = {
  list: string[];
};

const initial = JSON.parse(sessionStorage.getItem('storage') ?? '[]');

const Storage: Component<State> = {
  state: { list: initial },
  view: ({ state }) => ul(state.list.map((item) => li(item))),
  mounted: ({ state }) => {
    if (!state.list.length) {
      state.list = ['Item #1', 'Item #2', 'Item #3'];
      sessionStorage.setItem('storage', JSON.stringify(state.list));
    }
  },
};

mount(document.querySelector('.recipe'), Storage);
