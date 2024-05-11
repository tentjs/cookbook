import { type Component, mount, tags } from '@tentjs/tent';
import * as styles from '../css/radio.module.css';

const { div, input, p } = tags;

enum Values {
  Radio1 = 'radio-1',
  Radio2 = 'radio-2',
  Radio3 = 'radio-3',
}

type State = {
  selected: Values;
};

const Radio: Component<State> = {
  state: { selected: Values.Radio2 },
  view: ({ state }) =>
    div([
      div(
        // Use Object.values() to iterate over the enum values,
        // you can also just create the radio buttons manually.
        Object.values(Values).map((value) =>
          input([], {
            type: 'radio',
            value,
            // Add a name attribute to group radio buttons together
            name: 'radio-name',
            checked: state.selected === value,
            // Use the onchange event to update the state
            onchange: ({ target }) => (state.selected = target.value),
            className: styles.radio,
          })
        ),
        { className: styles.container }
      ),
      p(`Selected: ${state.selected ? state.selected : 'none'}`),
    ]),
};

mount(document.querySelector('.recipe'), Radio);
