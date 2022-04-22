import { render } from '@testing-library/react';
import PokemonList from './pokemon-list';

test('renders learn react link', () => {
  const component = render(<PokemonList />);
  expect(component.getByText('Pokemon List is here!')).toBeTruthy();
});