import { render, screen, cleanup, getByLabelText, fireEvent  } from '@testing-library/react';
import App from './App';
import TodoForm from './components/TodoForm'

afterEach(cleanup)

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

it('test input value todo', () => {
  const { getByLabelText } = render(<TodoForm />)
  const input = getByLabelText('name-input')
  fireEvent.change(input, { target: { value: 'Read a book' } })
  expect(input.value).toEqual('Read a book')
})

