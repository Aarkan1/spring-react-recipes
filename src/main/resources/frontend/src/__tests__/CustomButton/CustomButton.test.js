import React from 'react'
import ReactDOM from 'react-dom'
import CustomButton from '../../components/CustomButton'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

afterEach(cleanup)

it('mounting without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CustomButton />, div)
})

it('renders button correctly', () => {
  const { getByTestId } = render(<CustomButton label="click me please" />)
  expect(getByTestId('custom-button')).toHaveTextContent('click me please')
})

test('renders button correctly', () => {
  const { getByTestId } = render(<CustomButton label="save" />)
  expect(getByTestId('custom-button')).toHaveTextContent('save')
})

test('matches snapshot', () => {
  const tree = renderer.create(<CustomButton label="click me please" />).toJSON()
  expect(tree).toMatchSnapshot()
})