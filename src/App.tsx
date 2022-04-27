import PokemonList from './components/pokemon-list/pokemon-list';

function App() {
  return (
    <div className="container">
      <div className="row ustify-content-start">
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
          <PokemonList />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-8 col-lg-8">
          description
        </div>
      </div>
    </div>
  );
}

export default App;
