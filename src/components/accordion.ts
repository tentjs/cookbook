import {mount, tags, type Component} from '@tentjs/tent'
import * as styles from '../css/accordion.module.css'

const {div, h3, p} = tags

type State = {
  current: number
}

const titles = ['Italian Delights', 'Spicy Sizzlers of Asia', 'Desserts Around the World']

const Accordion: Component<State> = {
  state: {current: 0},
  view: ({state}) => div(
    titles.map(
      (title, index) => div([
        h3(title, {
          onclick: () => state.current =
            state.current === index ? -1 : index,
          role: 'button',
          className: [
            styles.title,
            index === state.current ? styles.active : '',
          ].join(' ')
        }),
        div(
          index === state.current ?
            content(index) : [],
          {className: styles.content}
        ),
      ])
    ), {className: styles.accordion}
  )
}

function content(index: number) {
  switch (index) {
    case 0:
      return div([
        p('Indulge in the rich flavors of Italy, from hearty pasta dishes to mouthwatering pizzas. Explore the diverse regional cuisines that make Italian food a culinary masterpiece.')
      ])
    case 1:
      return div([
        p('Embark on a journey through the vibrant and spicy world of Asian cuisine. From the fiery streets of Bangkok to the savory delights of Tokyo, discover the diverse and tantalizing flavors that make Asian food an unforgettable experience.')
      ])
    case 2:
      return div([
        p('Treat your taste buds to a sweet symphony as we explore desserts from various corners of the globe. Indulge in the decadence of French pastries, savor the sweetness of Turkish delights, and experience the sugary wonders that make desserts a universal delight.')
      ])
    default:
      return div([])
  }
}

mount(
  document.querySelector('.recipe'),
  Accordion
)
