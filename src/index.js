// import CreateForm from './components/CreateForm'
import CreatePage from './components/CreatePage'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Navigation from './components/Navigation'
import createElement from './lib/createElement'

const cards = [] // hier werden die durch submit erzeugten Cards reingemappt

const header = Header('Quiz App')

const navigation = Navigation(onNavigate) // dependency injection

const homePage = HomePage()

const createPage = CreatePage(onSubmit)

const grid = createElement(
  'div',
  { className: 'appGrid' },
  header,
  homePage,
  createPage,
  navigation
)

document.body.append(grid)

function onSubmit(question, answer) {
  cards.push({ question, answer })
  homePage.setCards(cards)
}

function onNavigate(text) {
  if (text === 'Home') {
    homePage.show()
    createPage.hide()
    header.setText('QuizzApp')
  }

  if (text === 'Create') {
    homePage.hide()
    createPage.show()
    header.setText('Create')
  }
}
