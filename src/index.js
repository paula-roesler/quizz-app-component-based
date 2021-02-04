import Button from './components/Button'
import Header from './components/Header'

const header = Header('Quiz App', 'May the best win!')
document.body.append(header)

const button = Button('submit')
document.body.append(button)
