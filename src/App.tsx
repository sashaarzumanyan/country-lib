import Header from './components/Header';
import Main from './components/Main';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import { useGetAllCountryQuery } from './store/service/countryApi';
require('dotenv').config();

function App() {
  const { data } = useGetAllCountryQuery('');
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path={`${process.env.REACT_APP_URL}/`}>
            <Home countries={data!} />
          </Route>
          <Route path={`${process.env.REACT_APP_URL}/country/:name`} component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Main>

    </>
  );
}

export default App;
