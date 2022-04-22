import { render } from '@testing-library/react';
import PokemonListed from './pokemon-listed';

test('renders learn react link', () => {
  const component = render(<PokemonListed />);
  expect(component.getByText('Charmander')).toBeTruthy();
});