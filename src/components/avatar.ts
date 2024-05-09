import { type Component, mount, tags } from '@tentjs/tent';

const { div } = tags;

const Avatar: Component = {
  view: ({ attr }) => {
    const src = attr('src');

    if (!src) {
      return div([]);
    }

    return div('', {
      style: `
        background-image: url(${src});
        width: 50px;
        height: 50px;
        border-radius: 50px;
      `,
    });
  },
};

document.querySelectorAll('.avatar').forEach((el) => {
  mount(el, Avatar);
});
