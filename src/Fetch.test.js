import { render, waitFor  } from '@testing-library/react';
import { Fetch } from './Fetch';

const setup = () => {
    const container = render(<Fetch />)
    return { container }
}


test('Fetches', async () => {
    const { container } = setup()
    await  waitFor(()=> {container.getByText('delectus aut autem')},{timeout: 3000})
    expect(container).toMatchSnapshot()
   
})