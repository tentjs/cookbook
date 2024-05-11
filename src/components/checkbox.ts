import { type Component, mount, tags } from '@tentjs/tent';
import * as styles from '../css/checkbox.module.css';

const { div, input, p } = tags;

type State = {
  checked: boolean;
};

const Checkbox: Component<State> = {
  state: { checked: false },
  view: ({ state }) =>
    div([
      input([], {
        type: 'checkbox',
        checked: state.checked,
        onchange: ({ target }) => (state.checked = target.checked),
        className: styles.checkbox,
      }),
      p(state.checked ? 'Checked' : 'Not checked'),
    ]),
};

mount(document.querySelector('.recipe'), Checkbox);
