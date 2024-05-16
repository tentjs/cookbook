import { mount, tags, type Component } from '@tentjs/tent';

const { p } = tags;

type Attrs = {
  msg: string;
};

const Attributes: Component<{}, Attrs> = {
  view: ({ el }) => p(`This is your message: ${el.dataset.msg}`),
};

mount(document.querySelector('.recipe'), Attributes);
