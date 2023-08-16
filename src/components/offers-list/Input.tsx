import React, { ChangeEvent, LegacyRef } from 'react';
import * as styles from './Input.module.scss';

interface InputI {
   label: string;
   value: string;
   placeholder: string;
   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef((props: InputI, ref: LegacyRef<HTMLInputElement>) => {
   return (
      <div>
         <label>{props.label}</label>
         <input
            className={styles.input}
            type="text"
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
         />
      </div>
   );
});

export default Input;
