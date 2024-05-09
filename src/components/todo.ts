import { type Component, mount, tags } from '@tentjs/tent';
import * as styles from '../css/todo.module.css';

const { div, ul, li, input } = tags;

type Item = {
  title: string;
  done: boolean;
};
type State = {
  title: string;
  list: Item[];
};

const list: Item[] = [
  { title: 'To-do #1', done: false },
  { title: 'To-do #2', done: true },
  { title: 'To-do #3', done: false },
];

const Todo: Component<State> = {
  state: { list, title: '' },
  view: ({ state }) =>
    div([
      input([], {
        type: 'text',
        placeholder: 'A new to-do...',
        oninput: ({ target }) => (state.title = target.value),
        onkeydown: ({ key, target }) => {
          if (key !== 'Enter') return;
          state.list = [...state.list, { title: target.value, done: false }];
          target.value = '';
          state.title = '';
        },
      }),
      ul(
        state.list.map((todo) =>
          li(todo.title, {
            onclick: () => (todo.done = !todo.done),
            className: todo.done ? styles.done : '',
          })
        ),
        { className: styles.todo }
      ),
    ]),
};

mount(document.querySelector('.recipe'), Todo);
