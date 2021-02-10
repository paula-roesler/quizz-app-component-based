import createElement from '../../lib/createElement'
import homeSVG from '@fortawesome/fontawesome-free/svgs/solid/home.svg'
import bookmarkSVG from '@fortawesome/fontawesome-free/svgs/solid/bookmark.svg'
import createSVG from '@fortawesome/fontawesome-free/svgs/solid/edit.svg'
import settingsSVG from '@fortawesome/fontawesome-free/svgs/solid/sliders-h.svg'
import './Navigation.css'

const buttonsConfig = [
  { text: 'Home', svgPath: homeSVG },
  { text: 'Bookmark', svgPath: bookmarkSVG },
  { text: 'Create', svgPath: createSVG },
  { text: 'Settings', svgPath: settingsSVG },
]

export default function Navigation(onNavigate) {
  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    const button = createElement(
      'button',
      { className: 'Navigation__button' },
      createElement('img', { src: svgPath, alt: '' }),
      text
    )
    button.addEventListener('click', () => onNavigate(text))
    return button
  })

  const el = createElement('nav', { className: 'Navigation' }, ...buttons) // spread of buttons
  return el
}
