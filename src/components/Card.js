import createElement from '../lib/createElement'
import Button from './Button'
import './Card.css'

export default function Card(question, answer) {
  const questionEl = createElement('h2', { innerText: question })
  const buttonEl = Button('Show answer')
  const answerEl = createElement('p', { hidden: true, innerText: answer })

  buttonEl.addEventListener('click', () => {
    answerEl.hidden = !answerEl.hidden // wie togglen, kehrt boolsche Werte um durch das Ausrufezeichen
  })

  const el = createElement(
    'section',
    { className: 'Card' },
    questionEl,
    buttonEl,
    answerEl
  )

  return el
}
