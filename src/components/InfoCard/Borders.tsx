import React from 'react';
import styled from 'styled-components';
import { IBorderProps } from '../../ts/UI/Border';


const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  & > b {
    font-weight: var(--fw-bold);
  }
  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;

const Borders: React.FC<IBorderProps> = ({borders, neighbors, push}) => {
  // debugger
  return (
    <Meta>
      <b>Border Countries</b>
      {!borders.length ? (
        <span>There is no border countries</span>
      ) : (
        <TagGroup>
          {neighbors?.map((b, index: number) => (
            <Tag key={index} onClick={() => push(`/country/${b.name}`)}>
              {b.name}
            </Tag>
          ))}
        </TagGroup>
      )}
    </Meta>
  );
};

export default Borders;