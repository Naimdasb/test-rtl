import { render, waitFor, fireEvent  } from '@testing-library/react';
import { Fetch } from './Fetch';


const setup = () => {
    const container = render(<Fetch />)
    return { container }
}

test('Fetches', async () => {
    const { container } = setup()
    const button = container.getByRole('button', {name: 'Click Here'})
    fireEvent.click(button)
    await  waitFor(()=> {container.getByText('delectus aut autem')})
})

