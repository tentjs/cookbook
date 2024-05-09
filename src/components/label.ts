import { Component, mount, tags } from '@tentjs/tent';
import * as styles from '../css/label.module.css';

const { span } = tags;

const Label: Component = {
  view: ({ el }) => {
    const attrs = el.attributes;
    const text = attrs.getNamedItem('text')?.value;
    const variant = attrs.getNamedItem('variant')?.value;

    if (!text || !variant) {
      return span([]);
    }

    el.removeAttribute('text');
    el.removeAttribute('variant');

    return span(text, { className: `${styles.label} ${styles[variant]}` });
  },
};

document.querySelectorAll('.label').forEach((el) => {
  mount(el, Label);
});
