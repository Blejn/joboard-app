import React from 'react';
import * as styles from './CountOffers.module.scss';
interface CountOfferI {
   length: number;
}
const CountOffers = (props: CountOfferI) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.text}>{props.length} offers found</div>
      </div>
   );
};

export default CountOffers;
