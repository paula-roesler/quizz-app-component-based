import CreateForm from '../CreateForm'
import createElement from '../../lib/createElement'
import './CreatePage.css'

export default function CreatePage(onSubmit) {
  const el = createElement(
    'main',
    { className: 'CreatePage' },
    CreateForm(onSubmit)
  )
  console.log({ onSubmit })
  function show() {
    el.hidden = false
  }

  function hide() {
    el.hidden = true
  }

  return {
    el,
    show,
    hide,
  }
}
