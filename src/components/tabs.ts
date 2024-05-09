import { mount, tags, type Component } from '@tentjs/tent';
import * as styles from '../css/tabs.module.css';

const { div, p, button } = tags;

type State = {
  current: number;
};

const Tabs: Component<State> = {
  state: { current: 0 },
  view: ({ state }) =>
    div([
      div(
        titles.map((title, i) =>
          button(title, {
            onclick: () => (state.current = i),
            className: state.current === i ? styles.active : '',
          })
        ),
        { className: styles.buttons }
      ),
      div(content(state.current), { className: styles.content }),
    ]),
};

const titles = ['Gadgets', 'Tech Trends', 'Tech Projects'];

function content(current: number) {
  switch (current) {
    case 0:
      return [
        p(
          'Explore the cutting-edge world of technology with our curated list of the latest gadgets. From sleek smartphones to powerful laptops, stay ahead of the curve with these must-have devices.'
        ),
        p(
          "Embark on a journey through the ever-evolving world of tech marvels. Our selection of the latest gadgets combines sleek design with cutting-edge features, ensuring you're always in sync with the pulse of innovation. Explore these powerful devices that seamlessly blend style and functionality."
        ),
      ];
    case 1:
      return [
        p(
          'Discover the top tech trends shaping the future. From artificial intelligence to augmented reality, dive into the innovations that are revolutionizing the way we live, work, and connect.'
        ),
        p(
          'Peer into the future of technology with our comprehensive guide to the hottest trends of 2024. From the rise of sustainable tech to the integration of 5G, stay informed about the game-changing developments that are reshaping industries and pushing boundaries.'
        ),
      ];
    case 2:
      return [
        p(
          "Get hands-on with our DIY tech projects. Whether you're a beginner or a tech enthusiast, these step-by-step guides will help you create cool gadgets and unleash your creativity in the world of technology."
        ),
        p(
          "Unleash your inner tech guru with our DIY tech projects. Whether you're a novice or a seasoned tinkerer, these step-by-step guides empower you to build your own gadgets. Dive into the world of customization and innovation as you bring your tech ideas to life."
        ),
      ];
    default:
      return p('');
  }
}

mount(document.querySelector('.recipe'), Tabs);
