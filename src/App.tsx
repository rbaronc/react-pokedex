import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppContainer from './components/app-container/app-container';
import PokemonList from './components/pokemon-list/pokemon-list';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <PokemonList />
        <div className="col-xs-6 col-sm-6 col-md-8 col-lg-8">
          description
        </div>
      </AppContainer>
    </Provider>    
  );
}

export default App;
