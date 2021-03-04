import { render, screen, fireEvent  } from '@testing-library/react';
import App from './App';

const setup = () => {
  const component = render(<App />)
  const button = screen.getByRole('button', {name: 'Add'})
  const input = screen.getByPlaceholderText('Enter text..')
  const dummyText = 'Hello There'
  return {
    input,
    button,
    dummyText,
    component
  }
}

  test('Add', () => {
    const { input, button, component, dummyText} = setup()
    fireEvent.change(input,{ target: { value: dummyText } })
    expect(input.value).toBe(dummyText)
    fireEvent.click(button)
    expect(screen.getByText(dummyText))
    expect(component).toMatchSnapshot()
  })  


