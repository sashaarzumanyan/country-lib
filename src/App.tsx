import Header from './components/Header';
import Main from './components/Main';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import { useGetAllCountryQuery } from './store/service/countryApi';

function App() {
  const { data } = useGetAllCountryQuery('');
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <Home countries={data!} />
          </Route>
          <Route path="/country/:name" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Main>

    </>
  );
}

export default App;
