import { mount, tags, type Component } from '@tentjs/tent';
import * as styles from '../css/modal.module.css';
import anime from 'animejs';

const { div, h2, p, button } = tags;

let animation: anime.AnimeInstance;

type State = {
  open: boolean;
  content: {
    title: string;
    body: string;
  };
};

const Modal: Component<State> = {
  state: { open: false, content: { title: '', body: '' } },
  view: ({ state }) =>
    div([
      button('Open', { onclick: () => onOpen(state) }),
      div(
        state.open
          ? [
              div(
                [
                  h2(state.content.title),
                  ...state.content.body.split('\n').map((str) => p(str)),
                  div(
                    button('Close', {
                      onclick: async () => await onClose(state),
                    }),
                    { className: styles.footer }
                  ),
                ],
                { className: styles.inner }
              ),
              div([], {
                onclick: async () => await onClose(state),
                className: styles.overlay,
              }),
            ]
          : [],
        { className: `${styles.modal} ${state.open ? 'open' : ''}` }
      ),
    ]),
  mounted: async ({ state }) => {
    document.body.addEventListener('keydown', async (ev) => {
      if (state.open && (ev.key === 'Esc' || ev.key === 'Escape')) {
        await onClose(state);
      }
    });

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/50');
      state.content = await res.json();
    } catch (_) {
      state.content = { title: '', body: '' };
    }
  },
};

const onOpen = (state: State) => {
  state.open = true;

  document.body.classList.add(styles.noScroll);

  animation = anime({
    targets: document.querySelector(`.${styles.modal}`),
    opacity: [0, 1],
    duration: 200,
    easing: 'easeInOutSine',
  });
};

const onClose = async (state: State) => {
  animation.reverse();
  animation.play();

  await animation.finished;

  document.body.classList.remove(styles.noScroll);

  state.open = false;
};

mount(document.querySelector('.recipe'), Modal);
