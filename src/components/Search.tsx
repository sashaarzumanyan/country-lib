import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

type SearchProps = {
  search: string;
  setSearch: Function;
};

interface InputProps {
  readonly type: string;
  placeholder: string;
}

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs<InputProps>({
  type: 'search',
  placeholder: 'Search a country',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;

const Search: FunctionComponent<SearchProps> = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};

export default Search;
