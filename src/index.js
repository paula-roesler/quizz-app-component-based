import createElement from './lib/createElement'
import Card from './components/Card'
import Header from './components/Header'

const grid = createElement(
  'div',
  { className: 'appGrid' },
  Header('Quiz App', 'May the best win!'),
  Card('Foo bar?', 'Bar baz!')
)

document.body.append(grid)
