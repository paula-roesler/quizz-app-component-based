import createElement from '../../lib/createElement'
import './Navigation.css'

import homeSVG from '@fortawesome/fontawesome-free/svgs/solid/home.svg'
import bookmarkSVG from '@fortawesome/fontawesome-free/svgs/solid/bookmark.svg'
import createSVG from '@fortawesome/fontawesome-free/svgs/solid/plus-square.svg'
import settingsSVG from '@fortawesome/fontawesome-free/svgs/solid/sliders-h.svg'

const buttonsConfig = [
  { svgPath: homeSVG, text: 'Home' },
  { svgPath: bookmarkSVG, text: 'Bookmark' },
  { svgPath: createSVG, text: 'Create' },
  { svgPath: settingsSVG, text: 'Settings' },
]

export default function Navigation(onNavigate) {
  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    // destructuring assignment of Parameter
    const button = createElement('img', { src: svgPath, alt: text })
    button.addEventListener('click', () => onNavigate(text))
    return button
  })

  const el = createElement('nav', { className: 'Navigation' }, ...buttons) // spread of buttons
  return el
}
