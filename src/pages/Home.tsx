import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from '../components/Card';
import Controls from '../components/Controls';
import { List } from '../components/List';
import { ICountry } from '../ts/interfaces/ICountry';

const Home = ({countries}: {countries: ICountry[]}) => {
  const [filtredCountries, setFiltredCountries] = useState(countries);
  // debugger;
  const { push } = useHistory();

  // const handleSearch = (search: string, region: string) => {

  //   // eslint-disable-next-line prefer-const
  //   // let data = countries? [...filtredCountries]: [];
    
  //   if(region){
  //     // debugger
  //     data = data.filter((elem) => elem.region.includes(region));
  //   };

  //   if(search){
  //     data = data.filter(elem => elem.name.toLowerCase().includes(search.toLowerCase()));
  //   };

  //   setFiltredCountries(data);
  // };

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
