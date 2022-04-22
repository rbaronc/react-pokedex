import { render } from '@testing-library/react';
import App from './App';

test('renders App Component', () => {
  const component = render(<App />);
  expect(component.getByText('bla!')).toBeTruthy();
});
