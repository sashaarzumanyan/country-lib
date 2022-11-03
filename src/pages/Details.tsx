import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useGetSingleCountryQuery } from '../store/service/countryApi';
import { MatchParams } from '../ts/interfaces/RouteProps/matchParams';
import _ from 'lodash';
import { IoArrowBackSharp } from 'react-icons/io5';
import { Button } from '../components/Button';
import InfoCard from '../components/InfoCard/index';

const Details = () => {
  const { name } = useParams<MatchParams>();
  const { goBack, push, } = useHistory<History>();
  const { data } = useGetSingleCountryQuery(name!);

  const country = _.isArray(data)? data[0] : undefined;
  
  

    return (
      <div>
        <Button onClick={goBack}>
          <IoArrowBackSharp />
          Back
        </Button>

        {country && <InfoCard country={country} push={push} />}
      </div>
    );
};

export default Details;
