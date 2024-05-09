import { mount, tags, type Component } from '@tentjs/tent';
import * as styles from '../css/input.module.css';

const { div, p, input } = tags;

type State = {
  text: string;
};

const Text: Component<State> = {
  state: { text: '' },
  view: ({ state }) =>
    div([
      div(
        [
          input([], {
            oninput: ({ target }) => (state.text = target.value),
            placeholder: 'Your message...',
          }),
          p(state.text),
        ],
        { className: styles.group }
      ),
    ]),
};

mount(document.querySelector('.recipe'), Text);
