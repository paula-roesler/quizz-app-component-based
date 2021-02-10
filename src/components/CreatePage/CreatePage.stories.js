import CreatePage from './CreatePage'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Pages/CreatePage',
  component: CreatePage,
}

const onSubmit = action('onSubmit')

export const base = () => CreatePage(onSubmit).el
