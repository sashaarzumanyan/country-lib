import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { handleSearch } from '../helpers/dataControl';
import { useAppDispatch } from '../hooks/redux';
import { setSearchConf } from '../store/slice/configs';
import { CustomSelect } from './CustomSelect';
import Search from './Search';

interface Continents {
  value: string;
  label: string;
}

const options: Continents[] = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Controls = ({onSearch}: {onSearch: (search: string, region: string ) => any}) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const [continent, setContinent] = useState(options[0]);

  const searchConf = {search: value, region: continent?.value};

  useEffect(() => {
    dispatch(setSearchConf({searchValue: value, region: continent?.value}));
    handleSearch(searchConf, );
  }, [value, continent, dispatch, onSearch]);
  

  const handleChange = (option: any) => {
    setContinent(option);
  };

  return (
    <Wrapper>
      <Search search={value} setSearch={setValue} />
      <CustomSelect
        options={options}
        placeholder="Filter by continents"
        isClearable
        isSearchable={false}
        value={continent}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default Controls;
