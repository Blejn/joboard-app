import { Offer } from '../../interfaces/Offer';
import CountOffers from './CountOffers';
import InputsContainer from './InputsContainer';
import * as styles from './OffertsContainer.module.scss';

import React from 'react';

const OffertsContainer = () => {
   return (
      <div className={styles.container}>
         <InputsContainer />
         <CountOffers length={36} />
      </div>
   );
};

export default OffertsContainer;
