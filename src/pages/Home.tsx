import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from '../components/Card';
import Controls from '../components/Controls';
import { List } from '../components/List';
import { dataFilter } from '../helpers/dataControl';
import { useAppSelector } from '../hooks/redux';
import { ICountry } from '../ts/interfaces/ICountry';

const Home = ({countries}: {countries: ICountry[]}) => {
  const [filtredCountries, setFiltredCountries] = useState<ICountry[]>(countries);
  const {searchValue, selectedRegion} = useAppSelector(state => state.configs);
  const { push } = useHistory();
  const searchConf = useCallback(() => ({search: searchValue, region: selectedRegion}),[searchValue, selectedRegion]);

  useEffect(() => {
    dataFilter(searchConf(), setFiltredCountries, countries);
  },[countries, searchConf]);


  return (
    <>
      <Controls  />
      <List>
        {filtredCountries?.map((elem: ICountry) => {
          const countryInfo = {
            img: elem.flags.png,
            name: elem.name,
            info: [
              {
                title: 'Population',
                description: elem.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: elem.region,
              },
              {
                title: 'Capital',
                description: elem.capital,
              },
            ],
          };
          return <Card key={elem.name} onClick={() => push(`country/${elem.name.toLowerCase()}`)} {...countryInfo} />;
        })}
      </List>
    </>
  );
};

export default Home;
