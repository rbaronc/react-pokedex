import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppContainer from './components/app-container/app-container';
import PokemonList from './components/pokemon-list/pokemon-list';
import PokemonDetails from './components/pokemon-details/pokemon-details';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <PokemonList />
        <PokemonDetails />
      </AppContainer>
    </Provider>    
  );
}

export default App;
