import React from 'react';
import * as styles from './InputsContainer.module.scss';
import Input from './Input';

const InputsContainer = () => {
   return (
      <div className={styles.container}>
         <Input label="" value="" placeholder="Search for" onChange={() => {}} />
         <Input label="" value="" placeholder="Search location" onChange={() => {}} />
      </div>
   );
};

export default InputsContainer;
