import { type Component, mount, tags } from '@tentjs/tent';

const { div } = tags;

const Avatar: Component = {
  view: ({ attr }) => {
    const src = attr('src');
    const width = attr('width');
    const height = attr('height');
    const size = attr('size');

    if (!src && !size) {
      return div([]);
    }

    const w = size ? `${size}px` : width ?? '50px';
    const h = size ? `${size}px` : height ?? '50px';

    return div('', {
      style: `
        background-image: url(${getSrc(src, size)});
        width: ${w};
        height: ${h};
        border-radius: ${w};
      `,
    });
  },
};

function getSrc(src?: string, size?: string) {
  if (src) {
    return src;
  }

  if (size) {
    return `https://source.unsplash.com/${size}x${size}`;
  }

  return '';
}

document.querySelectorAll('.avatar').forEach((el) => {
  mount(el, Avatar);
});
